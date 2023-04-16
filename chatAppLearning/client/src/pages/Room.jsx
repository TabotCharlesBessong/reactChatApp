
import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import {ChatWindow} from '../component'
import { Typography } from "@mui/material";

const Room = () => {
  const params = useParams()
  const {socket} = useOutletContext()

  useEffect(()=>{
    if(!socket) return
    socket.emit('join-room',{roomId:params.roomId})
  },[socket])
  return (
    <div>
      <Typography variant='h4'>Room: {params.roomId} </Typography>
      <ChatWindow/>
    </div>
  )
};

export default Room;
