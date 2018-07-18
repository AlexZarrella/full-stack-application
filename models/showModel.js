const mongoose = require("mongoose");
const Schema   = mongoose.Schema; 

const showSchema = new Schema({
  title: String,
  genre: String,
  image: String,
  cast: [String],
  summary: String,
  reviews: [
    {reviewer: {type: Schema.Types.ObjectId, ref: "User"},
     rating: String, content: String}
  ]
});











const Show = mongoose.model("Show", showSchema);

module.exports = Show;