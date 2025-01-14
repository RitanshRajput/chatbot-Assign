const express = require("express");
const { getBotResponse, saveChatHistory } = require("../controllers/chatController");
const router = express.Router();

router.post("/chat", async (req, res) => {
  const { query } = req.body;
  const botResponse = await getBotResponse(query);

  await saveChatHistory(query, botResponse);

  res.json(botResponse);
});

module.exports = router;
