const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const homeschema = new Schema({
    placeimg1:{
       type : String
    },
    placeimg2:{
        type : String
    },
    placeimg3 : {
        type : String   
    },
    placename:{
        type : String
     },
     placeinfo:{
         type : String
     },
     placetime : {
         type : String   
     }
    
})

module.exports = mongoose.model('home',homeschema,'home');








