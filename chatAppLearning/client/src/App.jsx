import {
  Box,
  Container
} from "@mui/material";
import {Header} from "./component";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const App = () => {
  const [socket, setSocket] = useState(io("http://localhost:5000"));
  useEffect(() => {
  },[])
  return (
    <div>
      <Container>
        <Header/>
        <Box xs={{display:'flex',justifyContent:'center'}} >
          <Outlet context={{socket}} />       
        </Box>
      </Container>
    </div>
  );
};

export default App;
