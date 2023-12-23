import React, { useState } from 'react'
import SignUpLogIn from './SignUpLogIn'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase";
import Duty from './duty/Duty';


const Main = () => {

  const [ isHidden, setIsHidden ] = useState(true)
  const [user] = useAuthState(auth);

  return (
    <>    
    { isHidden && <h1 className='maintenance-text'>A rendszer Január 1-ig nem elérhető!</h1> }
    <div hidden={isHidden}>
    { user ? <Duty /> : <SignUpLogIn /> }
    </div>
    </>
  )
}

export default Main