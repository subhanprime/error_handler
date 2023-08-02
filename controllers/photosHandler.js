const { json } = require("body-parser");

const Redis = require("redis");
const getOrSetCache = require("../config/redis/getOrSetCache.js");
const EXPIRY_TIME = 3600;

const { setKey, getKey } = require("../config/redis/getOrSetCache.js");
// const photosHandler = async (req, res, next) => {
//   console.log("photos handler");

//   await redisClient.get("photos", async (error, data) => {
//     if (error) console.log("error");
//     if (data != null) {
//       return res.json({ message: "my all photo", data: JSON.parse(data) });
//     } else {
//       // now there is write our query to fetch data and then set into redis
//       const response = " dummy response for data";
//       redisClient.set("photos", EXPIRY_TIME, JSON.stringify(response));
//       res.send("send data");
//     }
//   });

//   res.status(200).json({ message: "this is photo handler" });
// };

const photosHandler = async (req, res) => {
  console.log("photo handler");
  getKey("pull");
  //   const photo = await getOrSetCache("pddhot", () => {
  //     console.log("data is not in cache");
  //     const data = "mene redis call back s set ki h value";
  //     return data;
  //   });


  res.json({ message: "data get j" });
};

module.exports = { photosHandler };
