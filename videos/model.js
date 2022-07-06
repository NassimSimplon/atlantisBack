const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = mongoose.model('videos',new Schema({
    
    video:{
        type:String,
      
    } 
}))