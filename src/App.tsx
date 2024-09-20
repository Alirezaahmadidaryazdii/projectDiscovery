import React from 'react';
import Header from './layouts/Header';
import Body from './layouts/Body';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './pages/Home';
import SignIn from './pages/SingIn';
import Assets from './pages/assets';
import Scan from './pages/scan';
import Template from './pages/template';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar or Menu can go here */}
        <Header />
        <Routes>
          {/* Route definitions */}
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/assets' element={<Assets />} />
          <Route path='/scans' element={<Scan />} />
          <Route path='/template' element={<Template />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

