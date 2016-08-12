import { GET_MOVIES, SET_MOVIES } from '../constants';

// const initialState = {
// };

export default function runtime(state = { movies: [{}] }, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case SET_MOVIES: {
      return Object.assign({}, state, { movies: action.payload });
    }
    default:
      return state;
  }
}
