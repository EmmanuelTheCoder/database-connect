var Express = require("express");
const mongoose = require("mongoose");
const User = require("../utils/User");

const register = Express.Router()
register.use(Express.json())
register.use(Express.urlencoded({extended: false}))


register.post("/", async (req, res) =>{
    const signUp = new User({
        username: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    try{
        const user = await signUp.save()
        res.status(200).json({message: "success", detail: user})
    }
    catch(err){
        res.status(401).json({message: "failed", error: err})
    }
})

module.exports = register