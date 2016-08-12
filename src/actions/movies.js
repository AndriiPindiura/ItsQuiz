import { GET_MOVIES, SET_MOVIES, CONFIRM_REMOVE } from '../constants';

export function setMoviesToStore(movies) {
  return {
    type: SET_MOVIES,
    payload: movies,
  };
}

export function confirmRemove(id) {
  console.log((typeof id));
  return {
    type: CONFIRM_REMOVE,
    payload: typeof id === 'string' ? id : '-1',
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

export function sortMovies(movies, key, direction) {
  return (dispatch) => {
    const sortedMovies = [...movies];
    sortedMovies.sort((a, b) => (a[key] > b[key]) * direction);
    dispatch(setMoviesToStore(sortedMovies));
  };
}

export function removeMovie(id) {
  return (dispatch) => {
    fetch(`/movies/movie/${id}`, { method: 'delete' })
      .then((response) => {
        if (response.status === 204) {
          console.log(response);
          dispatch(confirmRemove('-1'));
          dispatch(getMovies());
        }
      })
      .catch(error => { console.log(error); });
  };
}

