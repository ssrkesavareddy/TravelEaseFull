const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tourpackageschema = new Schema({
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
     activites :{
        type : Array
     },
     price : {
        type : String
     },
     description :{
        type : String
     }

})

module.exports = mongoose.model('tourpackages',tourpackageschema,'tourpackages');