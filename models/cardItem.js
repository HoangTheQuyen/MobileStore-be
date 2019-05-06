const mongoose = require('mongoose')

const CardItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    },
    quantity: Number,
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    isDelete:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('CartItem', CardItemSchema)
