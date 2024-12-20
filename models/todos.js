const mongoose = require("mongoose")

const TodoSchema = mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    description: {
        type: String,
        index: true
    },
    meta: {
        type: Object
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const Todo = mongoose.model("Todo", TodoSchema)

module.exports = Todo