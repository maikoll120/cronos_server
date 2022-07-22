const categoryRoute = require("./category.route");
const messageRoute = require("./message.route");
const contactRoute = require("./contact.route");
const scheduleRoute = require("./schedule.route");

// Router
module.exports = function (app) {
  app.use("/category", categoryRoute);
  app.use("/message", messageRoute);
  app.use("/contact", contactRoute);
  app.use("/schedule", scheduleRoute);
};
