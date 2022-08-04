const Message = require('../models/Message')

// Find all
async function findAll (req, res, next) {
  try {
    const messages = await Message.find().populate('category')
    res.send(messages)
  } catch (error) {
    return next(error)
  }
}

// Find by ID
async function findById (req, res, next) {
  try {
    const message = await Message.findById(req.params.id).populate('category')
    res.send(message)
  } catch (error) {
    return next(error)
  }
}

// Create
async function create (req, res, next) {
  try {
    const message = new Message(req.body)
    await message.save()
    res.send('Created successfully!')
  } catch (error) {
    return next(error)
  }
}

// Update
async function update (req, res, next) {
  try {
    await Message.findByIdAndUpdate(req.params.id, req.body)
    res.send('Updated successfully!')
  } catch (error) {
    return next(error)
  }
}

// Delete
async function _delete (req, res, next) {
  try {
    await Message.findByIdAndDelete(req.params.id)
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
