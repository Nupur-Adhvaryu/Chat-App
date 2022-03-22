import React from 'react'
import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';
import ChatRoom from './components/ChatRoom'
import Login from './components/Login'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/room" element={<ChatRoom/>}/>
          <Route exact path="/login" element={<Login/>}/>
          </Routes>
      </Router>
      </>
  );
}

export default App;
