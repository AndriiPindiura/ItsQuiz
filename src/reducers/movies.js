import {
  SET_MOVIE,
  SET_MOVIES,
  CONFIRM_REMOVE,
  CREATE_DIALOG,
  SET_SELECTED_MOVIE,
  SET_YEARS,
  SET_TITLE,
  SET_TYPE,
  SET_YEAR,
  ADD_ACTOR,
  FILTER_MOVIES_TITLE,
  FILTER_MOVIES_ACTOR,
  SET_ERROR,
} from '../constants';

const initialState = {
  movies: [],
  confirmDelete: false,
  movieToRemove: '-1',
  createMovieDialog: false,
  movieInfo: false,
  years: [],
  movie: {},
  error: {},
  selectedMovie: {},
  videoTypes: ['DVD', 'VHS', 'Blu-Ray'],
};

export default function runtime(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE: {
      return Object.assign({}, state, {
        confirmDelete: false,
        movieToRemove: '-1',
        selectedMovie: {},
        createMovieDialog: false,
        movieInfo: false,
        movie: {},
        error: {},
      });
    }
    case SET_MOVIES: {
      const movies = [...action.payload]
        .sort((a, b) => a.title && b.title
        ? a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
        : 0);
      return Object.assign({}, state, { movies, rawMovies: movies });
    }
    case SET_SELECTED_MOVIE: {
      return Object.assign({}, state, {
        selectedMovie: action.payload ? action.payload : {},
        movieInfo: !(action.payload === null),
      });
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
      const cleanActor = [];
      actors.forEach(actor => {
        if (actor && actor.trim().length > 0) {
          cleanActor.push(actor);
        }
      });
      return Object.assign({}, state, {
        movie: Object.assign({}, state.movie, { actors: cleanActor }),
      });
    }
    case FILTER_MOVIES_TITLE: {
      const movies = [...state.rawMovies]
        .filter(movie => movie.title.toLowerCase().includes(action.payload.toLowerCase()));
      return Object.assign({}, state, {
        movies,
        searchByTitle: action.payload,
        searchByActor: '',
      });
    }
    case FILTER_MOVIES_ACTOR: {
      const movies = [...state.rawMovies]
        .filter(movie => movie.actors
          .filter(actor => actor.toLowerCase().includes(action.payload.toLowerCase())).length > 0);
      return Object.assign({}, state, {
        movies,
        searchByActor: action.payload,
        searchByTitle: '',
      });
    }
    case SET_ERROR: {
      return Object.assign({}, state, { error: action.payload });
    }
    default:
      return state;
  }
}
