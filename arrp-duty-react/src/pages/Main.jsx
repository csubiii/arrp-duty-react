import React, { useState } from 'react'
import SignUpLogIn from './SignUpLogIn'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase";
import Duty from './duty/Duty';


const Main = () => {

  const [ isHidden, setIsHidden ] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <>    
    { isHidden && <h1 className='maintenance-text'>Karbantartás alatt!</h1> }
    <div hidden={isHidden}>
    { user ? <Duty /> : <SignUpLogIn /> }
    </div>
    </>
  )
}

export default Main
