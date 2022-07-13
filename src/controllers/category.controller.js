module.exports = {
  find,
};

// Find Category
async function find(req, res, next) {
  try {
    res.send("Find Category");
  } catch (error) {
    return next(error);
  }
}
