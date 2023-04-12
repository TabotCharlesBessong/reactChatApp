
// const express = require('express')
import express from 'express'
import http from 'http'
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const httpServer = http.createServer(app)
const io = new Server(httpServer)

const PORT = 5000

app.get('/',(req,res) => {
  // res.json({data:"Hello world from socket"});
  // __dirname is not available in the type:module
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename) 
  res.sendFile(__dirname + '/index.html')
})

io.on('connection',(socket) => {
  console.log('Connected to socket')
})

httpServer.listen(PORT,() => {
  console.log(`Server is running on localhost ${PORT}`)
})