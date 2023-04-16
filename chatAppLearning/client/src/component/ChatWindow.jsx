
import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import {io} from 'socket.io-client'
import {Send} from '@mui/icons-material'
import { useOutletContext } from "react-router-dom";

const ChatWindow = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [typing, setTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const {socket} = useOutletContext()

  useEffect(() => {
    if (!socket) return;
    socket.on("message-from-server", (data) => {
      // console.log('message received from server',data)
      setChat((prev) => [...prev, {message:data.message,received:true}]);
    });
    socket.on("typing-started-from-server", () => {
      setTyping(true)
    });
    socket.on("typing-stoped-from-server", () => {
      setTyping(false)
    });
  }, [socket]);

  const handleForm = (e) => {
    e.preventDefault();
    // console.log(message)
    socket.emit("send-message", { message });
    setChat((prev) => [...prev, {message,received:false}]);
    setMessage("");
  };

  const handleInput = (e) => {
    setMessage(e.target.value);
    socket.emit('typing-started')
    if(typingTimeout) clearTimeout(typingTimeout);
    setTypingTimeout(setTimeout(() => {
      socket.emit('typing-stoped')
    },1000))
  }
  return (
    <Card sx={{padding:2,marginTop:10,width:'60%',backgroundColor:'orangered'}} >
      <Box sx={{ marginBottom: 5 }}>
        {chat.map((data,index) => (
          <Typography sx={{textAlign:data.received ? 'left': 'right'}} key={index} variant="subtitle1">
            {data.message}
          </Typography>
        ))}
      </Box>
      <Box component="form" onSubmit={handleForm}>
        {
          typing && (
            <InputLabel sx={{color:'white'}} shrink htmlFor='message-input' >
              typing...
            </InputLabel>
          )
        }
        <OutlinedInput
          type="text"
          sx={{backgroundColor:'white',width:'100%'}}
          value={message}
          onChange={handleInput}
          id='message-input'
          placeholder="write your message"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                type='submit'
                edge="end"
              >
                <Send/>
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
    </Card>
    
  )
};

export default ChatWindow;
