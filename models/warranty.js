const mongoose = require("mongoose");

const WarrantySchema = new mongoose.Schema({
  type: {
    type: String,
    default: "REPAIR",
    enum: ["REPAIR", "CHANGE"]
  },
  description: {
    type: String,
    required: "description is required"
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date,
  isDelete: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Warranty", WarrantySchema);
