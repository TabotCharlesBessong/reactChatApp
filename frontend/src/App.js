import React from 'react';

import Chat from './components/Chat';
import Join from './components/Join';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Routes>
  );
}

export default App;