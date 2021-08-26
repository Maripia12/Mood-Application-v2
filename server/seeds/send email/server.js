//making sure password is not visible to the user
require('dotenv').config();
const nodemailer = require('nodemailer');

//connecting to the transporter
let transporter= nodemailer.createTransport({
service: 'gmail',
auth: {
    //to pass email 
    user:'process.env.EMAIL',
    //to pass password
    pass:'process.env.PASSWORD'
}
});

//create mail options what are things you want to send in the email
let mailOptions = {
    //tell user which email the message is coming from
    from: 'zenappproject.com',
    to:'roserosales288@gmail.com',
    subject:'Hello and Welcome to Zen!',
    text:'Welcome! We are honored you have chose our company to be able to provide with daily positive affirmations. We hope that you enjoy our site and find it pleasant to navigate as well as a breath of fresh air. Enjoy the ability to leave us feedback on how a particular affirmation helped to self-empower you! We love to interact. And again welcome!'
};

//grabbing transporter to send email 
transporter.sendMail(mailOptions, function(err,data){
if (err){
    console.log('Error Occurs',err);
}else {
    console.log('Email Sent!');
}
});