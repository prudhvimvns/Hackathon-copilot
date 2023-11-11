import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/dashboard';
import ChatGPT from './Pages/chatGPT';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chatGPT" element={<ChatGPT />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
