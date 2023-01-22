import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import './App.css';

import Home from './components/Home';
import UploadData from './components/UploadData';
import ViewData from './components/ViewData';
import ViewDisease from './components/ViewDisease';
import DownloadData from './components/DownloadData';
import Login from "./components/Login";
import Signup from "./components/Signup";
import NewSignup from "./components/NewSignUp";
import React, { useState } from 'react';
import RequestData from './components/RequestData';
import ViewRequests from './components/ViewRequests';

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
          <Route path='/view-data/:disease/download' element={<DownloadData/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/newsignup" element={<NewSignup />} />
          <Route path='/request-data' element={<RequestData />} />
          <Route path='/view-requests' element={<ViewRequests />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
