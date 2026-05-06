const express = require("express");
const router = express.Router();
const { getBooths } = require("../controllers/boothController");

router.get("/", getBooths);

module.exports = router;
