import mongoose, { Schema } from 'mongoose';
const MovieSchema = new Schema({
  title: String,
  releaseYear: String,
  videoType: String,
  actors: Array,
});

export default mongoose.model('Movie', MovieSchema);
