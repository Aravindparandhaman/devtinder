const express = require("express");
const app = express();

const { adminAuth, userAdmin } = require("./middlewares/middleware");

app.use("/admin", adminAuth)
app.use("/admin/deletedata", userAdmin)



app.get("/user", (req, res) => {
    res.send({ firstNname: "Aravind", lastName: "Dheena" })
    console.log("Data fetched successfully")
})

app.post("/user", (req, res) => {
    res.send("Data successfully in DatBase")
    console.log("Data successfully in DatBas")
})

app.delete("/delete", (req, res) => {
    res.send("Data deleted Successfully")
    console.log("Data deleted successfully")
})

app.patch("/delete", (req, res) => {
    res.send("Data updated Successfully")
    console.log("Data deleted successfully")
})


app.get("/data", (req, res, next) => {
    console.log("Router 10 Data getting successfully ")
    // res.send("Router 10")
    next();
})


app.get("/data", (req, res, next) => {
    console.log("Router 0 Data getting successfully ")
    // res.send("Router 0")
    next();
})

app.get("/data", (req, res, next) => {
    console.log("Router 1 Data getting successfully ")
    // res.send("Router 1")
    next();
}, (req, res, next) => {
    console.log("Router 2 Data getting successfully ")
    // res.send("Router 2")
    next();


}, (req, res, next) => {
    console.log("Router 3 Data getting successfully ")
    res.send("Router 3")
}
)


app.get("/admin/Alldata",)

app.get("/admin/deletedata",)



// // app.use("/", (req, res) =>{
// //     res.send("slash screen")
// //     console.log("Splash screen is runing successfully")
// })







app.listen(3000, () => {
    console.log("server is listenig on port number 3000")
})