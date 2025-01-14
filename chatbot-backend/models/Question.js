// models/Question.js
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: String,
  response: String,
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
