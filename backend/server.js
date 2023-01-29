require("dotenv").config();
const express = require('express');
const mongo = require("mongoose");
const app = express();
app.use(express.json());
const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
const Port = process.env.PORT || 5000;

mongo.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected To DB"))


const AuthRouter = require("./routes/AuthRouter");
app.use("/auth", AuthRouter);


app.listen(Port, () => {
    console.log(`server is running on ${Port}`);
})
