import React from 'react'
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import { Duty, SignInCreateUser } from './pages';
import DutyPanel from './pages/DutyPanel';
function App() {

  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignInCreateUser />} />
          <Route path="/Duty" element={<Duty />} />
          <Route path="/DutyPanel" element={<DutyPanel />} />
          <Route path='*' element={<>we</>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
