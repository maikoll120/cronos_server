const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxLength: 40, unique: true },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
