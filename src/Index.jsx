import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowseRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Layout from './pages/Layout.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
