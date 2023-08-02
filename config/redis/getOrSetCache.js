// // const redis = require("redis");
// const  {createRedisClient}  = require("./redis.js");

// // const redisClient = redis.createClient({
// //   host: "localhost", // Redis server host
// //   port: 6379, // Redis server port
// // });

// // // Handle connection errors
// // redisClient.on("error", (error) => {
// //   console.error("Error connecting to Redis:", error);
// // });

// const getOrSetCache = async (key, cb) => {
//   const redisClient = createRedisClient();
//   redisClient.on("Ready", () => {
//   console.log("first option call", key);
//   return new Promise((resolve, reject) => {
//     console.log("second function call");
//     redisClient.get(key, async (error, data) => {
//       if (error) {
//         console.log("Error");
//         reject(error);
//       }
//       console.log("there is no errror");
//       if (data != null) {
//         console.log("rrrrrrrrr data != null");
//         return resolve(JSON.parse(data));
//       }
//       console.log("freesh data call");
//       const freshData = await cb();
//       redisClient.set(key, JSON.stringify(freshData));
//       redisClient.quit();
//       return resolve(freshData);
//     });
//   });
//   });
// };

// module.exports = getOrSetCache;
const redis = require("redis");

const redisClient = redis.createClient({
  host: "localhost", // Redis server host
  port: 6379, // Redis server port
});

redisClient.on("error", (error) => {
  console.log("Error connecting to Redis:", error);
});

// Set key-value pair in Redis
function setKey(key, value) {
  return new Promise((resolve, reject) => {
    redisClient.set(key, value, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });
}

// Get value for a given key from Redis
function getKey(key) {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });
}


// Quit Redis client when finished
function quitRedisClient() {
  redisClient.quit();
}

module.exports = {
  setKey,
  getKey,
  quitRedisClient,
};
