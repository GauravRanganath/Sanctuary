import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import './App.css';

import Home from './components/Home';
import UploadData from './components/UploadData';
import ViewData from './components/ViewData';
import ViewDisease from './components/ViewDisease';
import Login from "./components/Login";
import Signup from "./components/Signup"
import React, { useState } from 'react';

const App = () => {
  const [setting1value, setSetting1value] = useState('initialValue1');
  const [setting2value, setSetting2value] = useState(false);
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/upload-data' element={<UploadData />} />
          <Route path='/view-data' element={<ViewData />} />
          <Route path='/view-data/:disease' element={<ViewDisease/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
