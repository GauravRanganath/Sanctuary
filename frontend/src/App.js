import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import './App.css';

import Home from './components/Home';
import UploadData from './components/UploadData';
import ViewData from './components/ViewData';
import ViewDisease from './components/ViewDisease';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/upload-data' element={<UploadData />} />
          <Route path='/view-data' element={<ViewData />} />
          <Route path='/view-data/:disease' element={<ViewDisease/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
