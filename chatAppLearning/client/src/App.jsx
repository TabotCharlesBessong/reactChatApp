import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const App = () => {
  const [socket, setSocket] = useState(io("http://localhost:5000"));
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  

  useEffect(() => {
    // setSocket(io("http://localhost:5000"));
    console.log(socket)
  }, []);
  useEffect(() => {
    if(!socket) return
    socket.on('message-from-server',(data) => {
      // console.log('message received from server',data)
      setChat((prev) =>[...prev,data.message])
    console.log({chat})
    })
  }, [socket]);

  const handleForm = (e) => {
    e.preventDefault();
    // console.log(message)
    socket.emit('send-message', {message})
    setMessage('')
  };
  return (
    <div>
      <Container>
        <Box sx={{marginBottom:5}} >
          {chat.map((message,index) => (

            <Typography key={index} variant='subtitle1'>{message}</Typography>
          ))}

        </Box>
        <Box component="form" onSubmit={handleForm}>
          <TextField
            placeholder="write your message"
            variant="standard"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button variant="contained" type="submit">
            send message
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default App;
