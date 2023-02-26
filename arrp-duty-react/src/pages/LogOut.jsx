import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { doc } from "firebase/firestore";

const LogOut = () => {

  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  }

  return (
    <button onClick={signUserOut}>LogOut {user.uid}</button>
  )
}

export default LogOut