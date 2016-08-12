'use strict';

import Movie from './movies.model';

export function index(req, res) {
  res.status(200).end('It\'s Quiz api');
}

export function showMovie(req, res) {
  // console.log(req.params.id);
  return Movie.findById(req.params.id ? req.params.id : '').exec()
          .then(movie => res.status('200').json(movie))
          .catch(error => console.log(error));
}

export function getMovies(req, res) {
  console.log(req.params);
  Movie.find().exec()
  .then(result => res.status('200').json(result))
  .catch(error => console.log(error));
  // console.log(req.body);
  // res.status(200).end('API MOVIES');
}

export function createMovie(req, res) {
  Movie.create({
    title: 'test',
    releaseYear: Date.now(),
    videoType: 'DVD',
    // actors: ['actor1', 'actor2'],
    actors: [
      { firstName: 'actor1', lastName: 'actor1' },
      { firstName: 'actor1', lastName: 'actor1' },
    ],
  })
  .then(() => res.status('201').json({ complete: true }))
  .catch(error => console.log(error));
}

export function removeMovie(req, res) {
  // console.log('DESTROY');
  return Movie.findById(req.params.id ? req.params.id : -1).exec()
    .then(movie => {
      // console.log(movie);
      movie.remove()
        .then(() => res.status('204').end())
        .catch(error => console.log(error));
    })
    // .remove()
    // .then(() => res.status('200'))
    .catch(error => console.log(error));
}
