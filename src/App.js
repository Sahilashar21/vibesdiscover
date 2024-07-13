import React,{Component} from 'react';
import { ReactDOM } from 'react';
import FirstPage from './Components/FirstPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './Components/SignUp';
import About from './Components/About';
import Contact from './Components/Contact';
import Bookings from './Components/Bookings';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<FirstPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Bookings" element={<Bookings />} />
      </Routes>
      </Router> 
      </div>
  );
}

export default App;
