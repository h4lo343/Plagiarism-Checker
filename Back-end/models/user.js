// require mongoose module
const mongoose = require("mongoose")
const subject = require('./subject')

/* -------------------------------------- MODEL -------------------------------------- */
const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    subjects: [
        {subject_id: String}
    ]
})


const User = mongoose.model("User", userSchema)

module.exports = User