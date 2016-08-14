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

export function setMovie() {
  return {
    type: SET_MOVIE,
    payload: {},
  };
}

export function setFile(input) {
  return (dispatch) => {
    const reader = new FileReader();
    const movies = [];
    let movie = {
      title: '',
      releaseYear: '',
      videoType: '',
      actors: [],
    };
    reader.onload = (e) => {
      const strings = e.currentTarget.result.split('\n');
      strings.forEach(line => {
        if (line.length < 1) {
          if (movie.title.length > 0) {
            movies.push(movie);
          }
          movie = {
            title: '',
            releaseYear: '',
            videoType: '',
            actors: [],
          };
        }
        movie.title = line.startsWith('Title:')
          ? line.replace('Title: ', '')
          : movie.title;
        movie.releaseYear = line.startsWith('Release Year: ')
          ? line.replace('Release Year: ', '')
          : movie.releaseYear;
        movie.videoType = line.startsWith('Format: ')
          ? line.replace('Format: ', '')
          : movie.videoType;
        movie.actors = line.startsWith('Stars: ')
          ? line.replace('Stars: ', '').split(', ')
          : movie.actors;
      });
      fetch('/movies/import', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify(movies),
      })
        .then((response) => {
          if (response.status === 201) {
            dispatch(setMovie());
            dispatch(getMovies());
          }
        })
        .catch(error => { console.log(error); });
    };
    reader.readAsText(input.target.files[0]);
  };
}

export function setMovieTitle(input) {
  return {
    type: SET_TITLE,
    payload: input.target.value,
  };
}

export function setMovieVideoType(select) {
  return {
    type: SET_TYPE,
    payload: select.target.value,
  };
}

export function setMovieYear(select) {
  return {
    type: SET_YEAR,
    payload: select.target.value,
  };
}

export function addMovieActor(id, input) {
  return {
    type: ADD_ACTOR,
    payload: {
      id,
      title: input.target.value,
    },
  };
}

export function setYears() {
  const years = [];
  for (let i = 1900; i < 2018; i++) {
    years.push(i);
  }
  return {
    type: SET_YEARS,
    payload: years,
  };
}

export function confirmRemove(id) {
  return {
    type: CONFIRM_REMOVE,
    payload: typeof id === 'string' ? id : '-1',
  };
}

export function createMovieDialog() {
  return {
    type: CREATE_DIALOG,
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
          dispatch(confirmRemove('-1'));
          dispatch(getMovies());
        }
      })
      .catch(error => { console.log(error); });
  };
}

export function addMovie(movie) {
  return (dispatch) => {
    fetch('/movies/add', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(Object.assign({}, movie)),
    })
      .then((response) => {
        if (response.status === 201) {
          dispatch(setMovie());
          dispatch(getMovies());
        }
      })
      .catch(error => { console.log(error); });
  };
}

export function filterMovies(keyWord) {
  return {
    type: FILTER_MOVIES,
    payload: keyWord,
  };
}
