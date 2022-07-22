const express = require("express");
const router = express.Router();

// Controllers
const scheduleController = require("../controllers/schedule.controller");

// GET listing
router.get("/", scheduleController.findAll);
router.get("/:id", scheduleController.findById);

// POST listing
router.post("/", scheduleController.create);

// PUT listing
router.put("/:id", scheduleController.update);

// DELETE listing
router.delete("/:id", scheduleController.delete);

module.exports = router;
