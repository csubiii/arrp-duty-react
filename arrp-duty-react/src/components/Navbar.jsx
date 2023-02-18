import React from 'react'
import Login from '../pages/Login'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-contenet'>
        <ul className='navbar-nav' >
          <li className='navbar-item'>
            <Login />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
