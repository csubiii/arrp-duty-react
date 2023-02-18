import { auth } from "../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from "firebase/auth";

const LogOut = () => {

  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  }

  return (
    <button className="logout-btn" onClick={signUserOut}>Kijelentkezés</button>
  )
}

export default LogOut