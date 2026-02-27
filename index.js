const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const mongoose = require("mongoose")
const authRouter = require("./routers/authRouter");



const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URI,).then(() => {
    console.log("Database coected successfully")
}).catch((err) => {
    console.log(err)
})

app.use("/api/auth", authRouter);


app.get("/", (req, res) => {
    res.send("Default router of these project...");
    console.log("Default router...")
})


app.listen(8080, () => {
    console.log("Server is running on port number 8080")
})