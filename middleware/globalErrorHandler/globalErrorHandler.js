const error_handler = (err, req, res, next) => {
  console.log("now there we error handler");
  err.message = err.message || "internal Server Error";
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({ message: err.message, status: false });
};

module.exports = { error_handler };
