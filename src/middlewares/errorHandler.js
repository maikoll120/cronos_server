module.exports = function (err, req, res, next) {
  console.log("Error handler");
  res.status(500).send({ error: "Something failed!" });
  //return next(err);
};
