const express = require("express");
const router = express.Router();
const CustomError = require("../errors/customError.js");
const catchAsync = require("../middleware/catchAsyncError.js");
router.get("/cats",catchAsync((req, res, next) => {
    try {
      //   res.send("this cat ");
    //   throw new Error('sb khrba h')
    //   return next(new CustomError("cats not avails", 401));

      res.send("cats re avail");
    } catch (err) {
      return next(err);
    }
  })
);

module.exports = router;
