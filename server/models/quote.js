var mongoose=require('mongoose');

const config=require('../config/config').get(process.env.NODE_ENV);

const quoteSchema=mongoose.Schema({

    mood:{
        type:String,
        required: true,
        maxlength: 100
    },
    prompt:{
        type:String,
        required: true,
        maxlength: 100
    },
    message:{
        type:String,
        required: true,
        maxlength: 10000
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
    
        ref: 'User'
    },
    date:{
        type:Date
    },
    quote:{
        type:String
    }


});

module.exports=mongoose.model('Quote',quoteSchema);
