const express = require("express");
const User = require("../utils/User");
const jwt = require("jsonwebtoken");

const login = express.Router();
// login.use(Express.json())
// login.use(Express.urlencoded({extended: false}))

login.post("/", async (req, res) =>{
    const username = User.findOne({username: req.body.username})
    const password = User.findOne({password: req.body.password})

    if(!username || !password){
        res.send({message: "failed login", details: "username or password is not valid"})
    }

      
});

module.export = login