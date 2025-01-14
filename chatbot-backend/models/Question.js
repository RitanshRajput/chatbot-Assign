const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: String,
  response: String,
});

module.exports = mongoose.model("Question", questionSchema);
