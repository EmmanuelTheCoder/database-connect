var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  let mailTransporter= nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'jpdfdfd@gmail.com',
      pass: 'fdfdfdf'
    }
  });

  const sender = "Emmanuel <loyaltysamuel001@gmail.com>"
  
  let mailDetails = {
    from: sender,
    to: 'manfdfdfdueljuwon@gmail.com, cacahchapel@gmail.com',
    subject: 'writing',
    text: 'this is me sending a mail from my node. Sweet right?'
  
  };
  
  mailTransporter.sendMail(mailDetails, function(err, data ){
    if(err){
      res.status(500).json({error: err})
    }
    else{
      res.status(200).json({message: data});
    }
  })
  

});

module.exports = router;
