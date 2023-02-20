import React from 'react'
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login';
function App() {

  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
