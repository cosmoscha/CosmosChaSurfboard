import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import Agenda from './components/Agenda';
import Topic from './components/Topic';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact={true} element={<HomePage />} />
      <Route path="/agenda" exact={true} element={<Agenda />} />
      <Route path="/topic/:id" element={<Topic />} />
    </Routes>
    </BrowserRouter>
  );
    
    
}

export default App;
