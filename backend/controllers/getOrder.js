const OrderModal = require("../modals/OrderSchema");
const mongoose = require('mongoose');
const ProductModal = require("../modals/ProductSchema");
async function getOrder(req, res) {
    let orders = await OrderModal.find({
        user: req.body.user_id,
    })
        .populate("user", "name phone -_id")
        .populate("item", "name price img -_id")
        .select({ item: 1, user: 1, sub_total: 1, _id: 0 });

    res.send(orders)
}
module.exports = getOrder;
