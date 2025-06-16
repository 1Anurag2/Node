const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        lowercase : true
    })

export const User = mongoose.model("User",UserSchema) 