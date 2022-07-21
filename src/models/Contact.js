const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name: { type: String, required: true, maxLength: 40 },
    lastname: { type: String, required: true, maxLength: 40 },
    birthdate: { type: Date, required: true },
    picture: { type: String },
    pictureId: { type: String },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
