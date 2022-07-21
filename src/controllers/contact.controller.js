const Contact = require("../models/Contact");
const cloudinary = require("../helpers/cloudinary");

// Find all
async function findAll(req, res, next) {
  try {
    const contacts = await Contact.find();
    res.send(contacts);
  } catch (error) {
    return next(error);
  }
}

// Find by ID
async function findById(req, res, next) {
  try {
    const contact = await Contact.findById(req.params.id);
    res.send(contact);
  } catch (error) {
    return next(error);
  }
}

// Create
async function create(req, res, next) {
  try {
    const contact = new Contact(req.body);

    if (contact.picture) {
      const imageData = await cloudinary.uploadImage(
        "kiemw49j",
        contact.picture
      );

      if (imageData.url && imageData.public_id) {
        contact.picture = imageData.url;
        contact.pictureId = imageData.public_id;
      }
    }

    await contact.save();
    res.send("Created successfully!");
  } catch (error) {
    return next(error);
  }
}

// Update
async function update(req, res, next) {
  try {
    const contact = await Contact.findById(req.params.id);
    const newContact = { ...req.body };

    const imageData = await cloudinary.uploadImage(
      "kiemw49j",
      newContact.picture
    );

    if (imageData) {
      if (imageData.url && imageData.public_id) {
        if (contact.pictureId) {
          await cloudinary.deleteImage(contact.pictureId);
        }
        newContact.picture = imageData.url;
        newContact.pictureId = imageData.public_id;
      }
    } else {
      if (contact.pictureId) {
        await cloudinary.deleteImage(contact.pictureId);
      }
      newContact.picture = null;
      newContact.pictureId = null;
    }

    await Contact.findByIdAndUpdate(req.params.id, newContact);
    res.send("Updated successfully!");
  } catch (error) {
    return next(error);
  }
}

// Delete
async function _delete(req, res, next) {
  try {
    const contact = await Contact.findById(req.params.id);

    if (contact.pictureId) {
      await cloudinary.deleteImage(contact.pictureId);
    }

    await Contact.findByIdAndDelete(req.params.id);
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
