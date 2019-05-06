const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    required: "code is required"
  },
  type: {
    type: String,
    enum: ["X1", "X2", "X3"]
  },
  startDay: {
    type: Date,
    required: "start day is required",
    default: Date.now
  },
  endDay: {
    type: Date,
    required: "end day is required"
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

module.exports = mongoose.model("Coupon", CouponSchema);
