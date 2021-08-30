const router = require('express').Router();
const Quotes=require('./../models/quotes');
const mongoose = require('mongoose');

router.post('/api/addQuotes',function(req,res){

    const newqt=new Quotes(req.body);

    newqt.save((err,doc)=>{
        if(err) {console.log(err);
            return res.status(400).json({message:"error failed" ,success : false});}
        res.status(200).json({
            succes:true,
            message :"Quote added successfully!",
            user : doc
        });
    })
});



router.get("/api/getQuotes/:id",(req,res)=>{

    Quotes.find({moods:req.params.id},(err,obj)=>{
        if(err) {console.log(err);
             return res.status(400).json({message:"cannot find quote" ,success : false});}
            
        console.log(obj);
        res.status(200).json({
                    succes:true,
                    message :"Qupote get successfully!",
                    data : obj
                });
        
    
    })
    
    
      })


module.exports = router;