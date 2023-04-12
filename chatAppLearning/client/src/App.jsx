
import {Button} from '@mui/material'
import { useState,useEffect } from 'react'
import {io} from 'socket.io-client'

function App() {
  const [socket, setSocket] = useState(null);
  

  useEffect(() => {
    setSocket(io('http://localhost:5000'))
  },[])
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}

export default App
