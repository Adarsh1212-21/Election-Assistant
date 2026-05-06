const { findResponse } = require("../data/chat");

const chat = (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === "") {
    return res.status(400).json({ success: false, message: "Message is required." });
  }

  const answer = findResponse(message);

  res.json({
    success: true,
    userMessage: message,
    botReply: answer,
    timestamp: new Date().toISOString(),
  });
};

module.exports = { chat };
