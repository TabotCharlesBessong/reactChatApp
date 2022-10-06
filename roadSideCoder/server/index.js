
const express = require('express')
const dotenv = require('dotenv')

const {chats} = require('./data/data')

const app = express()

dotenv.config()

const port = 5000 || process.env.PORT 

app.get('/',(req,res)=>{
  res.send('<h1>Hello from homepage</h1>')
})

app.get('/api/chat',(req,res)=>{
  res.send(chats)
})

app.get('/api/chat/:id',(req,res)=>{
  // console.log(req.params.id)
  const singleChat = chats.find( c => c._id === req.params.id )
  res.send(singleChat)
})

app.listen(port,()=>{
  console.log(`Our server has started on server number ${port} `)
})