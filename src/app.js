const express = require("express");
const app = express();



app.get("/home", (req,res) =>{
    console.log("Home screen");
    res.send("Getting Home Screen")
})

app.use("/", (req, res) =>{
    res.send("slash screen")
    console.log("Splash screen is runing successfully")
})



app.listen(3000, () =>{
    console.log("server is listenig on port number 3000")
})