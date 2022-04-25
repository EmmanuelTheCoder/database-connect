var Express = require("express");
const mongoose = require("mongoose");
const User = require("../utils/User");

const register = Express.Router()
register.use(Express.json())
register.use(Express.urlencoded({extended: false}))


register.post("/", async (req, res) =>{
    const signUp = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        post: req.body.post
    })

    try{
            const user = await signUp.save()
            return res.status(200).json({message: "success", detail: user})
    
    }
    catch(err){
        res.status(401).json({message: "failed", error: err})
    }
})

register.post("/find", async (req, res) =>{
    const username = await User.findOne({username: req.body.username});

    const updated = await User.updateOne({username: req.body.username}, {$addToSet: {post: req.body.post}})

    res.send(updated)
});

module.exports = register
