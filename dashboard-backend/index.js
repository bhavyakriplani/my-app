const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");
const responseRoute = require("./routes/response");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

const MONGO_URL = "mongodb+srv://bhavyakriplanics21:life12345@cluster0.ejcmnh9.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(MONGO_URL)
    .then(()=>{console.log("DB Connection started.......")})
    .catch((err)=>{
        console.log(err);
    });

app.get("/", (req, res)=>{
    res.send("Hello!");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/responses", responseRoute);

app.listen(4000, ()=>{
    console.log("Server started listening on Port 4000.")
});