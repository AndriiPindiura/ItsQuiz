'use strict';

import mongoose, { Schema } from 'mongoose';
const MovieSchema = new Schema({
  title: String,
  releaseYear: Date,
  videoType: String,
  actors: [{
    firstName: String,
    lastName: String,
  }],
});

export default mongoose.model('Movie', MovieSchema);
