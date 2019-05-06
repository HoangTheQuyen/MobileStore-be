const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: "name supplier is required"
  },
  address: {
    type: String,
    trim: true,
    require: "address supplier is required"
  },
  phone: {
    type: String,
    trim: true,
    require: "phone supplier is required"
  },
  fax: String,
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Product"
    }
  ],
  accountNumber: [{ type: Number }],
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
