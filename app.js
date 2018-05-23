const express = require('express')
const http = require('http')

const app=express() //inicializar express a traves de una cte llamada app
const server = http.createServer(app)
const io = require('./io')

//Iniciar servidor
server.listen(8000,() =>{
  console.log('server on port', 8000)
});
io.attach(server);

var arduino = require('./arduino');

app.use('/', arduino);
