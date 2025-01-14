const Question = require("../models/Question");

const getQuestions = async (req, res) => {
  const questions = await Question.find();
  res.json(questions.map((q) => q.question));
};

module.exports = { getQuestions };
