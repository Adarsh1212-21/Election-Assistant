const express = require("express");
const cors = require("cors");

const timelineRoutes = require("./routes/timelineRoutes");
const boothRoutes = require("./routes/boothRoutes");
const chatRoutes = require("./routes/chatRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/timeline", timelineRoutes);
app.use("/api/booths", boothRoutes);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Election Assistant API is running 🗳️" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
