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
  Movie.find().exec()
  .then(result => res.status('200').json(result))
  .catch(error => console.log(error));
}

export function createMovie(req, res) {
  Movie.create(req.body)
    .then(() => res.status(201).end())
    .catch(error => {
      // console.log(error);
      // throw error;
      res.status(500).json(error);
    });
}

export function importMovies(req, res) {
  req.body.forEach(movie => {
    Movie.create(movie).catch(error => console.log(error));
  });
  res.status('201').end();
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
    .catch(error => console.log(error));
}
