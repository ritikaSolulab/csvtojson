const mongoose = require("mongoose");

const csvSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("csvRecords", csvSchema);