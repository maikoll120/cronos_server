const Category = require('../models/Category')

// Find all
async function findAll (req, res, next) {
  try {
    let criteria = null
    const queryName = req.query.name

    if (queryName) {
      criteria = {
        name: { $regex: queryName, $options: 'i' }
      }
    }

    const categories = await Category.find(criteria).sort({ name: 'asc' })
    res.send(categories)
  } catch (error) {
    return next(error)
  }
}

// Find by ID
async function findById (req, res, next) {
  try {
    const category = await Category.findById(req.params.id)
    res.send(category)
  } catch (error) {
    return next(error)
  }
}

// Create
async function create (req, res, next) {
  try {
    const category = new Category(req.body)
    await category.save()
    res.send('Created successfully!')
  } catch (error) {
    return next(error)
  }
}

// Update
async function update (req, res, next) {
  try {
    await Category.findByIdAndUpdate(req.params.id, req.body)
    res.send('Updated successfully!')
  } catch (error) {
    return next(error)
  }
}

// Delete
async function _delete (req, res, next) {
  try {
    await Category.findByIdAndDelete(req.params.id)
    res.send('Deleted successfully!')
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  delete: _delete
}
