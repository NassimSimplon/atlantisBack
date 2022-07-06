const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = mongoose.model('contacts',new Schema({
    nom:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    } 
}))