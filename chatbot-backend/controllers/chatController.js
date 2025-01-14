const Question = require("../models/Question");
const ChatHistory = require("../models/ChatHistory");

const getBotResponse = async (query) => {
  const answer = await Question.findOne({ question: query });

  if (answer) {
    return answer.response;
  }

  return "Sorry, I don't understand that question.";
};

const saveChatHistory = async (userMessage, botResponse) => {
  await ChatHistory.create({ userMessage, botResponse });
};

module.exports = { getBotResponse, saveChatHistory };
