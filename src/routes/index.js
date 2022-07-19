const categoryRoute = require("./category.route");
const messageRoute = require("./message.route");

// Router
module.exports = function (app) {
  app.use("/category", categoryRoute);
  app.use("/message", messageRoute);
};
