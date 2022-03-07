const jwt = require("jsonwebtoken");

module.exports = (req, res, next) =>{
    const token = req.header("auth-token")

    if (!token){
        return res.status(401).send("failed to authorize! Please proceed to login or signup")
    }

    try{
        const verified = jwt.verify(token, `${process.env.SECRET_PASS}`);
        req.user = verified
    }catch(err){
        res.status(400).json({message: "an error occured", err})
    }
}

//module.exports = Verify