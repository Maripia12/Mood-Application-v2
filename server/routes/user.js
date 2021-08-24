const router = require('express').Router();
const User=require('./../models/user');
const auth =require('./../middleware/auth');

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post('/api/signup',function(req,res){

  const newuser=new User(req.body);
  
 if(newuser.password!=newuser.password2)return res.status(400).json({message: "password not match"});
  
  User.findOne({email:newuser.email},function(err,user){
      if(user) return res.status(400).json({ auth : false, message :"email exits"});
      
      bcrypt.hash(req.body.password, 10).then((hash) => {
        const user1 = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username:req.body.username,
            email: req.body.email,
            password: hash
        });
        user1.save((err,doc)=>{
          if(err) {console.log(err);
              return res.status(400).json({ success : false});}
          res.status(200).json({
              success:true,
              message :"user created successfully!",
              user : doc
          });
      });
      })
      
  });
});



router.post("/api/login", (req, res, next) => {
  let getUser;
  User.findOne({
      email: req.body.email
  }).then(user => {
      if (!user) {
          return res.status(401).json({
              message: "Authentication failed",
              success:false
          });
      }
      getUser = user;
      return bcrypt.compare(req.body.password, user.password);
  }).then(response => {
      if (!response) {
          return res.status(401).json({
              message: "Authentication failed",
              success:false
          });
      }
      let jwtToken = jwt.sign({
          email: getUser.email,
          userId: getUser._id
      }, "longer-secret-is-better", {
          expiresIn: "100h"
      });
      res.status(200).json({
          token: jwtToken,
          expiresIn: 3600,
          msg: getUser,
          success:true,
          message:"Login Successful"
      });
  }).catch(err => {
      return res.status(401).json({
          message: "Authentication failed",
          success:false
      });
  });
});



router.get("/api/getAllusers", ({}, res) => {
  User.find({}).then((users) => {
      res.json(users);
  }).catch(err => {
      res.status(400).json(err);
  });
});



module.exports = router;