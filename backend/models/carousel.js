const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carouselschema = new Schema({
    img1:{
       type : String
    },
    img2:{
        type : String
    },
    img3 : {
        type : String   
    }
})

module.exports = mongoose.model('carousel',carouselschema,'carousel');