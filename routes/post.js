const express = require('express');
const verify = require("../utils/verify")

const post = express.Router()

post.get("/", verify, (req, res) =>{
    const postDetails = {
        posts: [
            {
                message: "this is me sending my first post, to be by only those authenticated"
            },
            {
                text: "writing this text here for testing purposes!"
            }
        ]
    }

    res.status(200).send(postDetails)
})

module.exports = post