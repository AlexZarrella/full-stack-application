const mongoose = require("mongoose");
const Schema   = mongoose.Schema; 

const movieSchema = new Schema({
  title: String,
  genre: String,
  image: String,
  cast: [String],
  plot: String,
  reviews: [{
     reviewer: {type: Schema.Types.ObjectId, ref: "User"},
     rating: String, 
     content: String
    }]
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;