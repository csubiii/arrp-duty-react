import React from 'react'
import SignUpLogIn from './SignUpLogIn'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase";
import LogOut from './LogOut';


const Main = () => {

  const [user] = useAuthState(auth);
  console.log(user?.uid)

  return (
    <>
    { user ? <LogOut /> : <SignUpLogIn /> }
    </>
  )
}

export default Main