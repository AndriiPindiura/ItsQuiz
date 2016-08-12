'use strict';

import { Router } from 'express';
import * as controller from './movies.controller';

const router = new Router();
router.get('/', (req, res) => {
  // for (let key in controller) {
  //   console.log(key);
  // }
  // console.log(controller);
  res.status(200).json(Object.keys(controller));
});
router.delete('/movie/:id', controller.removeMovie);
router.get('/movie/:id', controller.showMovie);
router.get('/list', controller.getMovies);
router.get('/add', controller.createMovie);
export default router;
