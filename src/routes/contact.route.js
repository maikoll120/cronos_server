const express = require("express");
const router = express.Router();

// Controllers
const contactController = require("../controllers/contact.controller");

// GET listing
router.get("/", contactController.findAll);
router.get("/:id", contactController.findById);

// POST listing
router.post("/", contactController.create);

// PUT listing
router.put("/:id", contactController.update);

// DELETE listing
router.delete("/:id", contactController.delete);

module.exports = router;
