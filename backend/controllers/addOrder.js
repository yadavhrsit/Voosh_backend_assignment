const { response } = require("express");
const OrderModal = require("../modals/OrderSchema");
const ProductModal = require("../modals/ProductSchema");
async function addOrder(req, res) {
    let user = req.body.user_id;
    let items = req.body.item;
    let sub_total = 0;

    const length = Object.keys(items).length;
    let i = 0;

    for (let item of items) {
        const last = i === length - 1;
        ProductModal.findById(item, function (err, data) {
            if (err) {
                return res.send(err);
            }
            else {
                sub_total += data.price;
                if (last) {
                    let orderData = {
                        user: user,
                        sub_total: sub_total,
                        item: items,
                    }

                    let result = new OrderModal(orderData);

                    result.save().then((item) => {
                        return res.json({
                            message: "Order successfull",
                            data: item
                        })
                    }).catch((err) => {
                        console.log(err);
                        return res.json({
                            message: "Order failed"
                        })
                    })
                }
            }
        });
        i++;
    }
}

module.exports = addOrder;

