import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import NotificationForm from './components/notificationform';
import NotificationForAll from './components/NotificationForAll';
import ExcelForm from './components/ExcelForm';
import InboxForm from './components/InboxForm';
import Home from './components/Home';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notification" element={<NotificationForm />} />
      <Route path="/NotificationForAll" element={<NotificationForAll />} />
      <Route path="/ExcelForm" element={<ExcelForm />} />
      <Route path="/InboxForm" element={<InboxForm />} />
    </Routes>
</BrowserRouter>
  )
}

export default App;
