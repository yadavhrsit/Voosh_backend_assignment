const mongoose = require('mongoose');
const UserModal = require("../modals/UserSchema");
const ProductModal = require("../modals/ProductSchema");
const Schema = mongoose.Schema;

const Order = new Schema({
    item: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: ProductModal
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UserModal
    },
    sub_total: Number
})

const OrderModal = mongoose.model('Order', Order);
module.exports = OrderModal;