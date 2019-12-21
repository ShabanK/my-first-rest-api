const mongoose = require("mongoose");

const subSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subbedTo: {
    type: String,
    required: true
  },
  subbedDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model("Sub", subSchema);
