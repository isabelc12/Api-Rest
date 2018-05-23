var Board = require('firmata')
var board = new Board('/dev/ttyACM0');
const io = require('./io')

board.on('ready',function() {
  console.log("Arduino conectado");
  board.setSamplingInterval(5000)
  board.pinMode(0, board.MODES.ANALOG)
  board.analogRead(0, function(value){
    console.log('valor: ' + value);
    io.emit('arduino:read', value)
  })
})

module.exports = board;
