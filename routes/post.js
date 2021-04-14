var Express = require("express");
const mongoose = require("mongoose");
const Post = require("../utils/Post");

const postMod = Express.Router()
postMod.use(Express.json())
postMod.use(Express.urlencoded({extended: false}))


postMod.get("/", (req, res) =>{
    res.send("working properly");
   
});

postMod.post("/", async (req, res) =>{

    const poster =  new Post ({
        title: req.body.title,
        description: req.body.description,
    });

   try{
       const savedPost = await poster.save()
       res.send(savedPost);

   }catch(err){
       res.send("something went wrong!")
   }

})

module.exports = postMod;
