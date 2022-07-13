const express = require("express");
const router = express.Router();

// Controllers
const categoryController = require("../controllers/category.controller");

// GET listing
router.get("/", categoryController.findAll);
router.get("/:id", categoryController.findById);

// POST listing
router.post("/", categoryController.create);

module.exports = router;
