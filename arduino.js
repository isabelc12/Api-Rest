const express = require('express');
const router = express.Router();
var board = require('./sensor');

router.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html')
});

router.get('/ON', function(req, res, next){
    board.digitalWrite(13, board.HIGH);
})

router.get('/OFF', function(req, res, next){
    board.digitalWrite(13, board.LOW);
  })

module.exports = router;
