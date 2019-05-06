const mongoose = require("mongoose");

const AttributeSchema = new mongoose.Schema({
    size: {
        sizeLong:{
            type: Number,
            require: 'sizeLong is required'
        },
        sizeWide:{
            type: Number,
            require: 'sizeWide is required'
        },
        sizeHigh: {
            type: Number,
            require: 'sizeHigh is required'
        }
    },
    weight: {
        type: Number,
        require: 'weight is required'
    },
    os: {
        type: String,
        default: 'NOT OS',
        enum: ['NOT OS', 'ANDROID', 'IOS']
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

module.exports = mongoose.model("Attribute", AttributeSchema);
