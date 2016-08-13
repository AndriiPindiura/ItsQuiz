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
      const sortedMovies = action.payload.sort((a, b) => a.title > b.title);
      return Object.assign({}, state, { movies: sortedMovies });
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
    default:
      return state;
  }
}
