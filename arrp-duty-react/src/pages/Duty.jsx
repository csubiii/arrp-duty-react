import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"
import DutyPanel from "./DutyPanel";

const Duty = () => {

  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  }

  return (
    <div>
    <button onClick={signUserOut}  >Log out</button>
    {user ? <DutyPanel /> : <h1>pls log in</h1> }
    </div>
  )
}

export default Duty