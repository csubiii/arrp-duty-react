import React from 'react'
import SignUpLogIn from './SignUpLogIn'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase";
import Duty from './duty/Duty';


const Main = () => {

  const [user] = useAuthState(auth);

  return (
    <>
    { user ? <Duty /> : <SignUpLogIn /> }
    </>
  )
}

export default Main