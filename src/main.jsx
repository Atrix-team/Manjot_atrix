import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import AdminIndex from './Dashboard/AdminIndex.jsx';
// import Home from './Pages/Home.jsx';
// const root = ReactDOM.createRoot(document.getElementById('root'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
 <AdminIndex />
    {/* <Home /> */}
 
  </StrictMode>,
)
