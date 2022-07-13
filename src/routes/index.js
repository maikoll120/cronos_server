const categoryRoute = require("./category.route");

// Router
module.exports = function (app) {
  app.use("/category", categoryRoute);
};
