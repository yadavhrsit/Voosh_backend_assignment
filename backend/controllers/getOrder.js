const OrderModal = require("../modals/OrderSchema");
const mongoose = require('mongoose');
const ProductModal = require("../modals/ProductSchema");
async function getOrder(req, res) {
    let orders = await OrderModal.find({
        user: req.body.user_id,
    })
        .populate("user", "name phone -_id")
        .select({ item: 1, user: 1, sub_total: 1, _id: 0 });
    orders[0].item.forEach((element) => {
        ProductModal.findById(element, function (err, data) {
            if (err) {
                return res.send(err);
            }
            else {
                console.log(data)
            }
        })
    })
    res.send(orders)
}
module.exports = getOrder;