const UserModal = require("../modals/UserSchema");
function getUser(req, res) {
    let phone = req.body.phone;
    if (!phone) {
        return res.json({ error: "Please Enter Phone Number" })
    }
    UserModal.findOne({ phone }, (err, data) => {
        if (err) {
            return res.json({
                message: "Not a registered Phone Number"
            })
        } else {
            return res.send({
                userdata: data
            })
        }
    })
}

module.exports = getUser;