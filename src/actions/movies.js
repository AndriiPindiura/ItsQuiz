import { GET_MOVIES, SET_MOVIES } from '../constants';

export function setMoviesToStore(movies) {
  return {
    type: SET_MOVIES,
    payload: movies,
  };
}

export function getMovies() {
  return (dispatch) => {
    fetch('/movies/list')
      .then((response) => {
        if (response.status === 200) {
          response.json().then(movies => {
            dispatch(setMoviesToStore(movies));
          });
        }
      })
      .catch(error => { console.log(error); });
  };
}

export function removeMovie(id) {
  return (dispatch) => {
    fetch(`/movies/movie/${id}`, { method: 'delete' })
      .then((response) => {
        if (response.status === 204) {
          console.log(response);
          dispatch(getMovies());
        }
      })
      .catch(error => { console.log(error); });
  };
}

