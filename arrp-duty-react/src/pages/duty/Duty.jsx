import { auth } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import DutyLoggedIn from './DutyLoggedIn';

const Duty = () => {

  const [user] = useAuthState(auth);

  return (
    <main>
    { user ? <DutyLoggedIn /> :  <h1>Jelentkezbe hogy lásd az oldalt</h1> }
    </main>
  )
}

export default Duty