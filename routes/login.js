const express = require("express");
const User = require("../utils/User");
const jwt = require("jsonwebtoken");

const login = express.Router();
login.use(express.json())
login.use(express.urlencoded({extended: false}))

login.post("/", async (req, res) =>{
    const username = await User.findOne({username: req.body.username})
    const password = await User.findOne({password: req.body.password})

    if(!username || !password){
        return res.send({message: "failed login", details: "username or password is not valid"})
    }

    console.log(username._id)
    res.send("login successful");

    
      
});

module.exports = login