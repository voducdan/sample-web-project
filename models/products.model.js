const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        require: true
    },
    short_description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    brand:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    material:{
        type:String,
        required:true
    },
    expire_date:{
        type:Number,
        required:true
    },
    date_created: {
        type: Date,
        required: true
    },
})

module.exports = mongoose.model('productSchema', productSchema, "product");