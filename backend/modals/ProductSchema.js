const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Productinfo = new Schema({
    name: String,
    price: Number,
    img: String
})

const ProductModal = mongoose.model('Product', Productinfo);

module.exports = ProductModal;