const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const queryschema = new Schema({
    name:{
        type : String,
       
    },
    email : {
        type : String,
       
       
    },
    query : {
        type : String,
       
        
    }
})

module.exports = mongoose.model('queries',queryschema,'queries');