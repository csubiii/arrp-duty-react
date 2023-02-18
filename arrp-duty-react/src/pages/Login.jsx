import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase"

import React from 'react'


const Login = () => {

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);

  }

  return (
    <button className="login-btn" onClick={signInWithGoogle} >Bejelentkezés</button>
  )
}

export default Login