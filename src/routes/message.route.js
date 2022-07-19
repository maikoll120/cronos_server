const express = require("express");
const router = express.Router();

// Controllers
const messageController = require("../controllers/message.controller");

// GET listing
router.get("/", messageController.findAll);
router.get("/:id", messageController.findById);

// POST listing
router.post("/", messageController.create);

// PUT listing
router.put("/:id", messageController.update);

// DELETE listing
router.delete("/:id", messageController.delete);

module.exports = router;
