import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import './App.css';

import Home from './components/Home';
import UploadData from './components/UploadData';
import ViewData from './components/ViewData';
import ViewDisease from './components/ViewDisease';
import RequestData from './components/RequestData';
import ViewRequests from './components/ViewRequests';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/upload-data' element={<UploadData />} />
          <Route path='/view-data' element={<ViewData />} />
          <Route path='/view-data/:disease' element={<ViewDisease/>} />
          <Route path='/request-data' element={<RequestData />} />
          <Route path='/view-requests' element={<ViewRequests />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
