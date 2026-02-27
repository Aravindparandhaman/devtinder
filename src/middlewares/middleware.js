 const adminAuth = (req, res) => {
    const token = "xyz"

    if (token === "xyz") {
        res.send("Sent data successfully");
    } else {
        res.status(401).send("Unauthorized data, please check...");
    }
};




const userAdmin =  (req, res) => {
    const token = "abc";
    const isAuthorized = token === "abc";
    if (isAuthorized) {
        res.send("Deleting the data Successfully")
    } else {
        res.send("not able to delete the user data")
    }
}

 module.exports = {
    adminAuth, userAdmin
};