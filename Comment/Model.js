const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = mongoose.model('comment',new Schema({
 
    image:{
        type:String,
        
    },
    fullName:{
        type:String,
        
    },
    videoID:{
        type:String,
        
    },
    comment:{
        type:String,
        
    }
}))