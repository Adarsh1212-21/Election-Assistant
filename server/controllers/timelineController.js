const timeline = require("../data/timeline");

const getTimeline = (req, res) => {
  res.json({ success: true, data: timeline });
};

module.exports = { getTimeline };
