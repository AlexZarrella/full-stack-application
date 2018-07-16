const mongoose = require("mongoose");
const Schema   = mongoose.Schema; 

const showSchema = new Schema({
  title: String,
  genre: String,
  cast: [String],
  summary: String,
  reviews: [{reviewer: String, content: String}]
});

const Show = mongoose.model("Show", showSchema);

module.exports = Show;