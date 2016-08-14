import {
  SET_MOVIE,
  SET_MOVIES,
  CONFIRM_REMOVE,
  CREATE_DIALOG,
  SET_YEARS,
  SET_TITLE,
  SET_TYPE,
  SET_YEAR,
  ADD_ACTOR,
  FILTER_MOVIES,
} from '../constants';

const initialState = {
  movies: [],
  confirmDelete: false,
  movieToRemove: '-1',
  createMovieDialog: false,
  years: [],
  movie: {},
  videoTypes: ['DVD', 'VHS', 'Blu-Ray'],
};

export default function runtime(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE: {
      return Object.assign({}, state, {
        confirmDelete: false,
        movieToRemove: '-1',
        createMovieDialog: false,
        movie: {},
      });
    }
    case SET_MOVIES: {
      const movies = [...action.payload]
        .sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
      return Object.assign({}, state, { movies, rawMovies: movies });
    }
    case CONFIRM_REMOVE: {
      return Object.assign({}, state, {
        confirmDelete: !state.confirmDelete,
        movieToRemove: action.payload,
        fileToImport: '',
      });
    }
    case CREATE_DIALOG: {
      return Object.assign({}, state, { createMovieDialog: !state.createMovieDialog });
    }
    case SET_YEARS: {
      return Object.assign({}, state, { years: action.payload });
    }
    case SET_YEAR: {
      return Object.assign({}, state, {
        movie: Object.assign({}, state.movie, { releaseYear: action.payload }),
      });
    }
    case SET_TYPE: {
      return Object.assign({}, state, {
        movie: Object.assign({}, state.movie, { videoType: action.payload }),
      });
    }
    case SET_TITLE: {
      return Object.assign({}, state, {
        movie: Object.assign({}, state.movie, { title: action.payload }),
      });
    }
    case ADD_ACTOR: {
      const actors = state.movie.actors ? [...state.movie.actors] : [];
      actors[parseInt(action.payload.id, 10)] = action.payload.title;
      return Object.assign({}, state, {
        movie: Object.assign({}, state.movie, { actors }),
      });
    }
    case FILTER_MOVIES: {
      const movies = [...state.rawMovies]
        .filter(movie => movie.title.toLowerCase().includes(action.payload.toLowerCase())
        || movie.actors
          .filter(actor => actor.toLowerCase().includes(action.payload.toLowerCase())).length > 0);
      return Object.assign({}, state, { movies, searchKeyWord: action.payload });
    }
    default:
      return state;
  }
}
