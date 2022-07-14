const express = require("express");
const router = express.Router();

// Controllers
const categoryController = require("../controllers/category.controller");

// GET listing
router.get("/", categoryController.findAll);
router.get("/:id", categoryController.findById);

// POST listing
router.post("/", categoryController.create);

// PUT listing
router.put("/:id", categoryController.update);

// DELETE listing
router.delete("/:id", categoryController.remove);

module.exports = router;
