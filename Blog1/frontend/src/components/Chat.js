import React, { useEffect, useState } from 'react'
import './index.css'
import queryString from 'query-string';
import io from 'socket.io-client'

let socket 

const Chat = ({location}) => {
  const [name,setName] = useState('')
  const [room,setRoom] = useState('')
  const endPoint = 'localhost:5000'

  
  useEffect(()=>{
    const {room,name} = queryString.parse(location.search)

    socket = io(endPoint)
    // console.log(name,room);
    setName(name)
    setRoom(room)

    socket.emit('join',{name,room},({error})=>{
      alert(error)
    })

    console.log(socket);
  },[endPoint,location.search])
  return (
    <>

    </>
  )
}

export default Chat
