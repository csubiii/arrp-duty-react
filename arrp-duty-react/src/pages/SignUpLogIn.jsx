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
      userId: userCred,
      username: username,
      dutyTime: 0,
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
        alert(error.code)
      });

  }

  const createUser = () => {
    
    createUserWithEmailAndPassword(authGetApp, email, password)
      .then((userCredential) => {
        // Signed in 
        const userCred = userCredential.user.uid;
        onCreateService(userCred);
        // ...
      })
      .catch((error) => {
       
      });

  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form" onSubmit={handleSubmit(createUser)}>
        <input type="text" placeholder="IC NÉV" onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Jelszó" onChange={(e) => setPassword(e.target.value)} />
        <input className="register-btn" type="submit" value="Regisztráció" />
        <button onClick={signIn}>Bejelentkezés</button>
        </form>
      </div>
    </div>
  )
}

export default SignUpLogIn