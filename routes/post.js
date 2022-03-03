var Express = require("express");
const mongoose = require("mongoose");
const Post = require("../utils/Post");

const postMod = Express.Router()
postMod.use(Express.json())
postMod.use(Express.urlencoded({extended: false}))


postMod.get("/", async (req, res) =>{
    //res.send("working properly");

    await Post.find({
        
        email: "ssshitessdee@gmail.com"
    }).then(doc =>{
        //console.log(doc)
        return res.json(doc)
        
    }).catch( err => {
        return res.send(err)
    })
   
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

});

postMod.get("/update",  (req, res) =>{
    // Post.findOneAndUpdate(
    //     {
    //         title: "changed again"
    //     },
    //     {
    //         title: "rendering unchanged"
    //     },
    //     {
    //         new: true,
    //         //runValidators: true
    //     },
    // ).then(doc =>{
    //     return res.json(doc)
    // }).catch(err => res.json(err))

    // Post.findOneAndRemove({
    //     title: "rendering unchanged"
    // }).then(res => res.json(res))
    // .catch(err => console.error(err));

    
});

postMod.post("/test", async (req, res) =>{
    const extraSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    });

    const setPost = await Post({
        title: "testing out title",
        description: "I hope this will work",
        name: "Adeola",
        age: 32
    })

    try{
        const saveNewPost = await setPost.save()
        res.json(saveNewPost)
    }
    catch(err){
        res.send("invalid! something wrong happened")
    }

    Post.add(extraSchema);



})

module.exports = postMod;
