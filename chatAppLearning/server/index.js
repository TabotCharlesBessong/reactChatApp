
// const express = require('express')
import express from 'express'
import http from 'http'
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const httpServer = http.createServer(app)
const io = new Server(httpServer,{
  cors:{
    origin:['http://localhost:5173']
  }
})

const PORT = 5000

app.get('/',(req,res) => {
  // res.json({data:"Hello world from socket"});
  // __dirname is not available in the type:module
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename) 
  res.sendFile(__dirname + '/index.html')
})

io.on('connection',(socket) => {
  // console.log('Connected to socket')
  socket.on('send-message',(data) => {
    socket.broadcast.emit('message-from-server',data)
    console.log('Message received')
  })
  socket.on('typing-started',() => {
    socket.broadcast.emit('typing-started-from-server')
  })
  socket.on('typing-stoped',() => {
    socket.broadcast.emit('typing-stoped-from-server')
  })
  socket.on('disconnect',(socket) => {
    console.log('User left the chat')
    // socket.on('send-message',(data) => {
    //   socket.emit('message-from-server',data)
    //   console.log('Message received')
    //   console.log(data)
    // })
  })
})


httpServer.listen(PORT,() => {
  console.log(`Server is running on localhost ${PORT}`)
})