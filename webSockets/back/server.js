const express = require('express')
const SocketIO = require('socket.io')
const http = require('http')

const port = 8080
const app = express()
const server = http.createServer(app)
const io = SocketIO(server, {
 cors: {
  origin: 'http:localhost:3000',
  method: ['GET', 'POST']
 } 
})

io.on('connection', (socket)=>{
  console.log('new connection');

  socket.emit('welcome', {message: 'hola mundo'})

  socket.on('message', (data)=>{ //a todos los que se conecten a message
    console.log('MESSAGE:', data);
    io.emit('broadcast', 'Hay un usuario diciendo hola')
    //a todos los que se conecten a broadcast
    io.to('some room').emit('private', 'Hola desde sala privada')
    //a todos los que estén en some room
  })

  socket.on('join room', (data)=>{
    console.log('nuevo usuario en la sala');
    socket.join('some room')
    // socket.join(`${data}`)
    io.to('some room').emit('private', 'Hola desde sala privada')

  })
  socket.on('disconnect', ()=>{
    console.log('user disconnected');
  })
})

server.listen(post, console.log('Server running on port ', port))