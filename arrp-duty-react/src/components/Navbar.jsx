import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'

const Navbar = () => {

  const [user] = useAuthState(auth);

  return (
    <nav className='navbar'>
      <div className='navbar-contenet'>
        <ul className='navbar-nav' >
          <li className='navbar-item'>
            Helo
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
