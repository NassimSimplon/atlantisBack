const multer = require('multer')

const path = require('path')
const fs = require('fs')


var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../client/public/videos')
    },
    filename:function(req,file,cb){
        var ext = file.originalname.substr(file.originalname.lastIndexOf('.'))
  cb(null,file.originalname )
  
    }


})
const store = multer({storage:storage}) 
module.exports = store