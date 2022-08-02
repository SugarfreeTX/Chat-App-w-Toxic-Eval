import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';


// import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat/>} /><Route/>
        <Route path="/" exact element={<Join/>} /><Route/>
      </Routes>
    </BrowserRouter>
    );
}


export default App;

