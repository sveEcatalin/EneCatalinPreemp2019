function errorHandler(err, req, res, next) {
  console.log("TRIGGERED");

  if (true) {
    console.log("TRIGGERED");
    return next(err);
  }
  res.status(404);
  res.json("error", { error: err });
}

module.exports = errorHandler;
