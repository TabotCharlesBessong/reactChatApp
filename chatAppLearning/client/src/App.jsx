import { Box, Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const App = () => {
  const [socket, setSocket] = useState(io("http://localhost:5000"));
  const [message, setMessage] = useState("");

  useEffect(() => {
    // setSocket(io("http://localhost:5000"));
    console.log(socket)
  }, []);
  useEffect(() => {
    if(!socket) return
    socket.on('message-from-server',(data) => {
      console.log('message received from server',data)
    })
  }, [socket]);

  const handleForm = (e) => {
    e.preventDefault();
    // console.log(message)
    socket.emit('send-message', {message})
    setMessage('')
  };
  return (
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
  );
};

export default App;
