const mongoose = require("mongoose");

const AttributeSchema = new mongoose.Schema({
    size: {
        long: Number,
        wide: Number,
        high: Number
    },
    weight: NaNumber,
    os: String,
    isDelete:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Attribute", AttributeSchema);
