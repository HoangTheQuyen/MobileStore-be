const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema({
    name: String,
    isDelete:{
        type: Boolean,
        default: false
    },
    address: String,
    products:[],
    phone: String,
    fax: String,
    
});

module.exports = mongoose.model("Supplier", SupplierSchema);
