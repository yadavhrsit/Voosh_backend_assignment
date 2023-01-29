const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userinfo = new Schema({
    name: String,
    phone: Number,
    password: String
})

const UserModal = mongoose.model('User', Userinfo);

module.exports = UserModal;