const router = require('express').Router();
const Quote=require('./../models/quote');
const mongoose = require('mongoose');

router.post('/api/addQuote',function(req,res){

    const newqt=new Quote(req.body);

    newqt.save((err,doc)=>{
        if(err) {console.log(err);
            return res.status(400).json({message:"error failed" ,success : false});}
        res.status(200).json({
            succes:true,
            message :"Quote added successfully!",
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
         return res.status(400).json({message:"cannot find quote" ,success : false});}
        
    console.log(obj);
    res.status(200).json({
                success:true,
                message :"Quote get successfully!",
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
})

  module.exports = router;