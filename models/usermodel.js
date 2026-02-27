
const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: [true, "Email is Required"],
        trim: true,
        unique:[true, "Email must be unique"],
        minLength: [5, "Email should conntain 5 letters"],
        lowerCase: true
    },
    password:{
        type: String,
        required: [true, "Password Should be unique"],
        select: false,
        trim: true
    },
    verified: {
        type: Boolean,
        default: false,
    },
    verificationCode: {
        type: String,
        select: false

    },
     verificationCodeValidation: {
        type: Number,
        select: false

    },
    forgotPasswordCode: {
        type: String,
        select: false

    },
     forgotPasswordCodeValidation: {
        type: Number,
        select: false

    }
}, {
    timestamps : true
});


model.exports = mongoose.model("user", userSchema);