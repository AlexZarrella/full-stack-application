const mongoose = require("mongoose");
const Schema   = mongoose.Schema; 

const movieSchema = new Schema({
  title: String,
  genre: String,
  cast: [String],
  plot: String,
  reviews: [{reviewer: String, content: String}]
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;