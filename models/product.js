const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: 'product already exists',
        required: "Product name is required"
      },
    price: {
        type: String,
        trim: true,
        required: "Product price is required"
    },
    supplier: {
        type: mongoose.Schema.ObjectId,
        ref:'Supplier'
    },
    origin: {
        type: mongoose.Schema.ObjectId,
        ref:'Origin'
    },
    isCellPhone: {
        type: Boolean,
        required: 'isCellPhone is required'
    },
    attribute: {
        type: mongoose.Schema.ObjectId,
        ref:'Attribute'
    },
    warrantyPeriod:{
        type: Date,
        required: "warrantyPeriod price is required"
    },
    category:{
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    },
    description:{
        type: String,
        trim: true,
        required: 'description is required'
    },
    images:[{
        type: String
    }],
    quantity:{
        type: Number,
        required: 'Quantity product is required'
    },
    created: {
        type: Date,
        default: Date.now
    },
   
    updated: Date,
    isDelete:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Product", ProductSchema);
