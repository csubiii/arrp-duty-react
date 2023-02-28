import React from 'react'
import SignUpLogIn from './SignUpLogIn'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase";
import Duty from './duty/Duty';


const Main = () => {

  const [user] = useAuthState(auth);
  console.log(user?.uid)

  return (
    <>
    { user ? <Duty /> : <SignUpLogIn /> }
    </>
  )
}

export default Main