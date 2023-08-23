import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLink from './NavLink';
// import { useEffect } from 'react';
import React, { Component } from 'react'
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import AboutUs from './AboutUs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavLink />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/aboutus' element={<AboutUs/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/gallery' element={<Gallery/>} />
            </Routes> 
        </BrowserRouter>
      
    </div>
  );
}

export default App;
