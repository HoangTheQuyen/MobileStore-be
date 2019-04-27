const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    supplier: String,
    origin: String,
    isCellPhone: Boolean,
    attribute: {
        ref:'Attribute'
    },
    warrantyPeriod: Date,
    isDelete:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Product", ProductSchema);
