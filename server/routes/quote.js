const router = require('express').Router();
const Quote=require('./../models/quote');
const mongoose = require('mongoose');

router.post('/api/addQuote',function(req,res){

    const newqt=new Quote(req.body);

    newqt.save((err,doc)=>{
        if(err) {console.log(err);
            return res.status(400).json({message:"error failed" ,success : false});}
        res.status(200).json({
            success:true,
            message :"Mood added successfully!",
            user : doc
        });
    })
})


router.get("/api/getAllQuote", ({}, res) => {
    Quote.find({}).then((users) => {
        res.json(users);
    }).catch(err => {
        res.status(400).json(err);
    });
  });


  router.get("/api/getQuote/:id",(req,res)=>{

Quote.find({user_id:req.params.id},(err,obj)=>{
    if(err) {console.log(err);
         return res.status(400).json({message:"cannot find mood" ,success : false});}
        
    console.log(obj);
    res.status(200).json({
                success:true,
                message :"Mood get successfully!",
                data : obj
            });
    

}).sort({date: 'desc'});


  })
  router.get("/posts/:id", async (req, res) => {
      
	const post = await Quote.findOne({ user_id: req.params.id });
    console.log(post)
	res.send(post)
})

router.get("/post/:id", async (req, res) => {
	try {
		const post = await Quote.findOne({ user_id: req.params.id })
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
});


router.delete("/api/deleteQuote/:id",(req,res)=>{
    Quote.findOneAndRemove({_id:req.params.id},(err,obj)=>{
        if(err) {console.log(err);
            return res.status(400).json({message:"Failed to delete " ,success : false});}
     
            
    console.log(obj);
    res.status(200).json({
                success:true,
                message :"Mood delete successfully!",
                data : obj
            });
    })
});

router.put("/api/updateQuote/:id",(req,res)=>{
    Quote.findOneAndUpdate({_id:req.params.id},req.body,{new: true},(err,obj)=>{
        if(err) {console.log(err);
            return res.status(400).json({message:"Failed to delete " ,success : false});}
     
            res.status(200).json({
                success:true,
                message :"Mood updated successfully!",
                data : obj
            })

    })
})


  module.exports = router;