import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"
import { app, auth, db } from "../config/firebase";
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


const SignUpLogIn = () => {

  const serviceRef = collection(db, "Service");
  const [user] = useAuthState(auth);
  const authGetApp = getAuth(app);

  const { handleSubmit } = useForm();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ username, setUsername ] = useState("");

  const onCreateService = async (user) => {
    await addDoc(serviceRef, {
      startTime: "2023/01/01 00:00:00",
      endTime: "2023/02/02 22:22:22",
      userId: user,
      username: username,
    });
  }


  const createUser = () => {
    
    createUserWithEmailAndPassword(authGetApp, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user.uid;
        console.log(user)
        onCreateService(user);
        // ...
      })
      .catch((error) => {
        console.log(error.code)
      });



  }

  const signIn = () => {
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error.code)
      });

  }


  return (
    <form onSubmit={handleSubmit(createUser)}>
      <input type="text" placeholder="IC NÉV" onChange={(e) => setUsername(e.target.value)} />
    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
    <input type="password" placeholder="Jelszó" onChange={(e) => setPassword(e.target.value)} />
    <input type="submit" value="Regisztráció" />
    <button onClick={signIn}>Bejelentkezés</button>
    </form>
  )
}

export default SignUpLogIn