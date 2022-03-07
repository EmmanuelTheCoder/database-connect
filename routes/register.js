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
        password: req.body.password
    })

    try{
        const checkIfUserExists = User.findOne({email: req.body.email})
        if(!checkIfUserExists){
            const user = await signUp.save()
            return res.status(200).json({message: "success", detail: user})
        }
        else{
            res.status(400).send("This email exists. Please proceed to login or recover password")
        }
    }
    catch(err){
        res.status(401).json({message: "failed", error: err})
    }
})

module.exports = register