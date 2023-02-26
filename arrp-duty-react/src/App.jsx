import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Main from './pages/Main';

function App() {

  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
    </div>
  )
}

export default App
