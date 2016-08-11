import { GET_MOVIES } from '../constants';

const initialState = {
  test: 'qwerty',
};

export default function runtime(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
}
