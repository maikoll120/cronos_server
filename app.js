const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

// Local modules
require("./src/helpers/db");
const routes = require("./src/routes");
const errorHandler = require("./src/middlewares/errorHandler");

// Express app
const app = express();

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "src/public")));
app.use(cors());

// Routes
routes(app);

// Error handler
app.use(errorHandler);

module.exports = app;
