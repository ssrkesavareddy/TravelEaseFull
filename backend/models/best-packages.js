const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bestpackageschema = new Schema({
    place_img1:{
       type : String
    },
    place_img2:{
        type : String
    },
    place_img3 : {
        type : String   
    },
    place_name:{
        type : String
     },
     place_info:{
         type : String
     },
     place_time : {
         type : String   
     },
     price : {
        type : String
     },
     description :{
        type : String
     }

})

module.exports = mongoose.model('best-packages',bestpackageschema,'best-packages');