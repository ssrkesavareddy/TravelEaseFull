const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signupschema = new Schema({
    name:{
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true,
        unique: true, 
        lowercase: true, 
        match: /^\S+@\S+\.\S+$/ 
    },
    password : {
        type : String,
        required: true, 
        minlength: 6 
    }
})

module.exports = mongoose.model('signup',signupschema,'signup');