const express = require('express')
  //Middleware
  const store = require('./middlleware')
//Router
const router = express.Router();
//Controller
const video = require('./controller');

// add User 
router.post('/video/add',store.array('video'),video.addVid)
module.exports = router