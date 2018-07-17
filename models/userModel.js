const mongoose = require("mongoose");
const Schema   = mongoose.Schema; 

const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  image: {type: String, default: "/images/defaultpic.png"}
});

const User = mongoose.model("User", userSchema);

module.exports = User;