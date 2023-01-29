const express = require('express');
const AuthRouter = express.Router();
const RegisterUser = require("../controllers/RegisterUser")
const LoginUser = require("../controllers/LoginUser")
const AddOrder = require("../controllers/addOrder")
const getOrder = require("../controllers/getOrder")
const getUser = require("../controllers/getUser")
const Validator = require("../utils/Validator")

AuthRouter.post("/register", RegisterUser);
AuthRouter.post("/login", LoginUser);

AuthRouter.post("/addorder", Validator, AddOrder);
AuthRouter.get("/getorder", Validator, getOrder);

AuthRouter.get("/user", Validator, getUser);


module.exports = AuthRouter;