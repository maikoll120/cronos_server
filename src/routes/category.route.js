const express = require("express");
const router = express.Router();

// Controllers
const categoryController = require("../controllers/category.controller");

// GET listing
router.get("/find", categoryController.find);

module.exports = router;
