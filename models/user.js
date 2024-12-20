const mongoose = require("mongoose")

const User = mongoose.Schema({
    user_name: {
        type: String,
        index: true
    },
    first_name:{
        type: String,
        index: true
    },
    last_name: {
        type: String,
        index: true
    },
    email:  {
        type: String,
        required: true,
        index: true
    },
    password: {
        type: String,
        select: false
    }
})