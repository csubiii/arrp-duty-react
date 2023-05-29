import {auth} from '../config/firebase';
import {Link} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'

const Navbar = () => {

  const [user] = useAuthState(auth);

  return (
    <nav className='navbar'>
      <div className='navbar-contenet'>
        <ul className='navbar-nav'>
        <Link className='link-style' to="/">
          <li className='navbar-nav-list'>
            <p>ARRP-DUTY</p>
          </li>
          </Link>
          <Link to={"/archívum"} className='link-style'>
          <li className='navbar-nav-list'>
            <p>Archivált Idők</p>
          </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
