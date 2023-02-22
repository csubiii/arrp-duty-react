import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"
import { app, auth, db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


const SignInCreateUser = () => {

  const serviceRef = collection(db, "Szolgálat");
  const [user] = useAuthState(auth);
  const authGetApp = getAuth(app);

  const { handleSubmit } = useForm();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const navigate = useNavigate();

  const onCreateService = async () => {
    await addDoc(serviceRef, {
      StartTime: '2023/01/01 00:00:00',
      EndTIme: '2023/02/02 22:22:22',
      uid: user.uid,
    });
  }

  const createUser = () => {
    
    createUserWithEmailAndPassword(authGetApp, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        onCreateService();
        navigate("/Duty")
        // ...
      })
      .catch((error) => {
        alert(error.code)
      });

  }

  const signIn = () => {
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/Duty")
        // ...
      })
      .catch((error) => {
        alert(error.code)
      });

  }


  return (
      <form onSubmit={handleSubmit(createUser)}>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Jelszó" onChange={(e) => setPassword(e.target.value)} />
      <input type="submit" value="Regisztráció" />
      <button onClick={signIn}>Bejelentkezés</button>
      </form>
  )
}

export default SignInCreateUser