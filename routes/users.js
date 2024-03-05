const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/pintrestdb");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  email: String,
  fullname: String,
});

module.exports = mongoose.model("User", userSchema);
