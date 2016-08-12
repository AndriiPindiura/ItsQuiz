import { GET_MOVIES, SET_MOVIES, CONFIRM_REMOVE } from '../constants';

const initialState = {
  movies: [],
  confirmDelete: false,
  movieToRemove: '-1',
};

export default function runtime(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case SET_MOVIES: {
      const sortedMovies = action.payload.sort((a, b) => a.title > b.title);
      return Object.assign({}, state, { movies: sortedMovies });
    }
    case CONFIRM_REMOVE: {
      return Object.assign({}, state, {
        confirmDelete: !state.confirmDelete,
        movieToRemove: action.payload,
      });
    }
    default:
      return state;
  }
}
