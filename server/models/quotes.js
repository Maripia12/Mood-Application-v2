var mongoose=require('mongoose');

const confiq=require('../config/config').get(process.env.NODE_ENV);

const quotesSchema=mongoose.Schema({

    quotes:{
        type:String,
        required: true,
        maxlength: 10000
    },
    moods:{
        type:String,
        required: true,
        maxlength: 100
    }


});

module.exports=mongoose.model('Quotes',quotesSchema);
