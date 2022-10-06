
const express = require('express')


const app = express()
const port = 5000 || process.env.PORT 

app.get('/',(req,res)=>{
  res.send('<h1>Hello from homepage</h1>')
})

app.get('')

app.listen(port,()=>{
  console.log(`Our server has started on server number ${port} `)
})