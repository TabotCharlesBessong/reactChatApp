import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import {Chat, Home, Room} from './pages'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/chats',
        element:<Chat/>
      },
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/room/:roomId',
        element:<Room/>
      }
    ]
  }
])

export default router