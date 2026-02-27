const express = require("express");
const app = express();

app.get("/user", (req, res) =>{
    res.send({firstNname:"Aravind", lastName:"Dheena" })
})

app.post("/user", (req,res) =>{
    res.send("Data successfully in DatBase")
    console.log("Data successfully in DatBas")
})

app.delete("/delete", (req,res) =>{
    res.send("Data deleted Successfully")
    console.log("Data deleted successfully")
})

app.patch("/delete", (req,res) =>{
    res.send("Data updated Successfully")
    console.log("Data deleted successfully")
})



app.use("/", (req, res) =>{
    res.send("slash screen")
    console.log("Splash screen is runing successfully")
})







app.listen(3000, () =>{
    console.log("server is listenig on port number 3000")
})