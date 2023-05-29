import React from 'react'
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Leaderboard from './pages/Leaderboard';
import Main from './pages/Main';
import ArchivedDutys from './pages/archive/ArchivedDutys';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/ranglista" element={<Leaderboard/>} />
          <Route path="/archívum" element={<ArchivedDutys/>} />
          <Route path="*" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
