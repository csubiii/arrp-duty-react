import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from '../pages/Login'
import LogOut from './LogOut';

const Navbar = () => {

  const [user] = useAuthState(auth);

  return (
    <nav className='navbar'>
      <div className='navbar-contenet'>
        <ul className='navbar-nav' >
          <li className='navbar-item'>
            { user ? <LogOut /> : <Login /> }
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
