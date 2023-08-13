import logo from './logo.svg';
import './App.css';
import './Navbar.js';
import Navbar from './Navbar.js';
import './styles.css';
import EDTA from './pages/EDTA';
import DRIP from './pages/DRIP';
import OLD from './pages/OLD';
import MISC from './pages/MISC';
import WBIT from './pages/WBIT';
import HOME from './pages/HOME';
import{Route, Routes} from "react-router-dom"
import { Component } from 'react';
import React from "react";

function App() {
  return (
    <>
      <Navbar />  
      <div className='container'>
        <Routes>
          <Route path="/" element={<HOME />} />
          <Route path="/EDTA" element={<EDTA />} />
          <Route path="/DRIP" element={<DRIP />} />
          <Route path="/OLD" element={<OLD />} />
          <Route path="/WBIT" element={<WBIT />} />
          <Route path="/MISC" element={<MISC />} />
        </Routes>
      </div>
    </>
    );
  }


export default App;
