import { GET_MOVIES } from '../constants';

export function getMovies({ name, value }) {
  return {
    type: GET_MOVIES,
    payload: {
      name,
      value,
    },
  };
}
