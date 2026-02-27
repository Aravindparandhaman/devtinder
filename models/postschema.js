const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true,"Title is Required"],
        unique: true,
        trim: true
    },
    discription: {
        type: String,
        required: [true,"Discription is Required"],
        trim: true
    
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("post", postSchema);