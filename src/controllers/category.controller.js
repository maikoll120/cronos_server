const Category = require("../models/Category");

// Find all
async function findAll(req, res, next) {
  try {
    const categories = await Category.find();

    res.send(categories);
  } catch (error) {
    return next(error);
  }
}

// Find by ID
async function findById(req, res, next) {
  try {
    const category = await Category.findById(req.params.id);

    res.send(category);
  } catch (error) {
    return next(error);
  }
}

// Create
async function create(req, res, next) {
  try {
    const category = new Category(req.body);
    await category.save();

    res.send("Created successfully!");
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  findAll,
  findById,
  create,
};
