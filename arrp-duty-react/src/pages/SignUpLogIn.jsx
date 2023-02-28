import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app, auth, db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";


const SignUpLogIn = () => {

  const serviceRef = collection(db, "Service");
  const authGetApp = getAuth(app);

  const { handleSubmit } = useForm();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ username, setUsername ] = useState("");

  const onCreateService = async (userCred) => {
    await addDoc(serviceRef, {
      startDate: "2023/01/01",
      endDate: "2023/02/02",
      startTime: 1,
      endTime: 1,
      userId: userCred,
      username: username,
    });
  }


  const createUser = () => {
    
    createUserWithEmailAndPassword(authGetApp, email, password)
      .then((userCredential) => {
        // Signed in 
        const userCred = userCredential.user.uid;
        console.log(userCredential.user)
        onCreateService(userCred);
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
        const userCred = userCredential.user.uid;
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