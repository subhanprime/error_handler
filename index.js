const express = require("express");
const app = express();
const redis = require("redis");
const PORT = process.env.PORT || 5002;
const cats = require("./Router/cats.js");
const allRoutes = require("./Router/index.js");
const compression = require("compression");
// let redisClient;



const {
  error_handler,
} = require("./middleware/globalErrorHandler/globalErrorHandler.js");

app.use(compression());
app.use(express.json());
app.use("/", cats);
app.use("/", allRoutes);
app.use("*", error_handler);
app.listen(PORT, () => {
  console.log("server running on", PORT);
});


