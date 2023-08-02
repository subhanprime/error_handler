const express = require("express");
const router = express.Router();

const { photosHandler } = require("../controllers/photosHandler.js");
router.get("/photo", photosHandler);

module.exports = router;
