const express = require("express");
const rootRouter = express.Router();
const photoRoute = require("./photos.js");
rootRouter.use("/", photoRoute);
module.exports = rootRouter;
