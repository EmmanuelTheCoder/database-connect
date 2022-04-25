const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({post: String})
const User = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    post: {
        type: Array
        
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    
    date:{
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model("post", User);
