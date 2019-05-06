const mongoose = require("mongoose");

const OriginSchema = new mongoose.Schema({
  nation: {
    type: String,
    trim: true,
    require: "nation supplier is required"
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

module.exports = mongoose.model("Supplier", SupplierSchema);
