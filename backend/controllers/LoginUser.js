const UserModal = require("../modals/UserSchema");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

function LoginUser(req, res) {
    let phone = req.body.phone;
    let password = req.body.password;

    if (!phone) {
        return res.json({ error: "Enter Phone Number" })
    }
    else {
        UserModal.findOne({ phone }, (err, data) => {
            if (err) {
                return res.json({
                    message: "not a registered phone Number"
                });
            } else {
                bcrypt.compare(password, data.password, function (err, result) {
                    if (result) {
                        let accesstoken = jwt.sign({ phone }, process.env.JWT_ACCESS_TOKEN, { expiresIn: "120m" })
                        return res.json({
                            message: "Logged in successfully",
                            login: true,
                            token: accesstoken
                        })
                    }
                    else {
                        return res.json({
                            message: "Incorrect Password"
                        })
                    }
                });
            }
        })
    }
}

module.exports = LoginUser;