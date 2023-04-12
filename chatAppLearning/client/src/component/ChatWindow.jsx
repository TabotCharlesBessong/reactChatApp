
import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import {io} from 'socket.io-client'
import {Send} from '@mui/icons-material'

const ChatWindow = () => {
  const [socket, setSocket] = useState(io("http://localhost:5000"));
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // setSocket(io("http://localhost:5000"));
    console.log(socket);
  }, []);
  useEffect(() => {
    if (!socket) return;
    socket.on("message-from-server", (data) => {
      // console.log('message received from server',data)
      setChat((prev) => [...prev, {message:data.message,received:true}]);
      console.log({ chat });
    });
  }, [socket]);

  const handleForm = (e) => {
    e.preventDefault();
    // console.log(message)
    socket.emit("send-message", { message });
    setChat((prev) => [...prev, {message,received:false}]);
    setMessage("");
  };
  return (
    <Box xs={{display:'flex',justifyContent:'center'}} >
      <Card sx={{padding:2,marginTop:10,width:'60%',backgroundColor:'orangered'}} >
        <Box sx={{ marginBottom: 5 }}>
          {chat.map((data,index) => (
            <Typography sx={{textAlign:data.received ? 'left': 'right'}} key={index} variant="subtitle1">
              {data.message}
            </Typography>
          ))}
        </Box>
        <Box component="form" onSubmit={handleForm}>
          <OutlinedInput
            type="text"
            sx={{backgroundColor:'white',width:'100%'}}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
    </Box>
  )
};

export default ChatWindow;
