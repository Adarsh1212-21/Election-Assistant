const booths = require("../data/booths");

const getBooths = (req, res) => {
  const { pin, area } = req.query;

  if (!pin && !area) {
    return res.json({ success: true, data: booths });
  }

  const filtered = booths.filter((b) => {
    const matchPin = pin ? b.pin === pin : true;
    const matchArea = area ? b.area.toLowerCase().includes(area.toLowerCase()) : true;
    return matchPin || matchArea;
  });

  if (filtered.length === 0) {
    return res.json({
      success: false,
      message: "No booths found for this location. Showing all available booths.",
      data: booths.slice(0, 3),
    });
  }

  res.json({ success: true, data: filtered });
};

module.exports = { getBooths };
