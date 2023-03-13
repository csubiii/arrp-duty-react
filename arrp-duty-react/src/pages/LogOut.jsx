import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const LogOut = () => {

  const signUserOut = async () => {
    await signOut(auth);
  }

  return (
    <button className="logout-btn" onClick={signUserOut}>Kilépés</button>
  )
}

export default LogOut