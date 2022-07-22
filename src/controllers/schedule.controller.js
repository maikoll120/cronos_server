const Schedule = require("../models/Schedule");

// Find all
async function findAll(req, res, next) {
  try {
    const schedules = await Schedule.find()
      .populate({
        path: "message",
        populate: {
          path: "category",
        },
      })
      .populate("contact");
    res.send(schedules);
  } catch (error) {
    return next(error);
  }
}

// Find by ID
async function findById(req, res, next) {
  try {
    const schedule = await Schedule.findById(req.params.id)
      .populate({
        path: "message",
        populate: {
          path: "category",
        },
      })
      .populate("contact");
    res.send(schedule);
  } catch (error) {
    return next(error);
  }
}

// Create
async function create(req, res, next) {
  try {
    const schedule = new Schedule(req.body);
    await schedule.save();
    res.send("Created successfully!");
  } catch (error) {
    return next(error);
  }
}

// Update
async function update(req, res, next) {
  try {
    await Schedule.findByIdAndUpdate(req.params.id, req.body);
    res.send("Updated successfully!");
  } catch (error) {
    return next(error);
  }
}

// Delete
async function _delete(req, res, next) {
  try {
    await Schedule.findByIdAndDelete(req.params.id);
    res.send("Deleted successfully!");
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  delete: _delete,
};
