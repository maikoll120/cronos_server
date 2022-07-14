const mongoose = require("mongoose");
const config = require("../../config");

(async function () {
  try {
    const db = await mongoose.connect(config.MONGODB_URI);
    console.log(`DB connected to: ${db.connection.name}`);
  } catch (error) {
    console.error(error);
  }
})();
