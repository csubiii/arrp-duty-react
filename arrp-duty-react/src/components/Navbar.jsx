import {auth} from '../config/firebase';
import {Link} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'

const Navbar = () => {

  const [user] = useAuthState(auth);

  return (
    <nav className='navbar'>
      <div className='navbar-contenet'>
        <ul className='navbar-nav'>
          <li className='navbar-nav-list'>
          <Link className='link-style' to="/">ARRP-DUTY</Link>
          </li>
          {
            user && <li className='navbar-nav-list'>
            <Link className='link-style' to="/ranglista">Ranglista</Link>
           </li>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
