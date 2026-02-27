const express = require("express");


const router = express.Router();

router.post("/signup", (req, res) =>{
    res.send("successfully Signed Up...!!!")
    console.log("Signup was successful")
})

module.exports = router;