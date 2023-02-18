import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';

const DutyLoggedIn = () => {

  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  }

  return (
    <div className='duty-container'>
      <div className='duty-options'>
        <ul>
          <li>
            <button>
              <a href='https://www.google.com/forms/about/'>Hibabejelentés</a>
            </button>
          </li>
          <li>
            <button onClick={signUserOut}>Kijelentkezés</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DutyLoggedIn