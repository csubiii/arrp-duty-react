// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBabRsUqplcYLBC7lANThzVsFBWcWFlLKU",
  authDomain: "arrp-duty-f80b7.firebaseapp.com",
  projectId: "arrp-duty-f80b7",
  storageBucket: "arrp-duty-f80b7.appspot.com",
  messagingSenderId: "616462136780",
  appId: "1:616462136780:web:9b8fe4d560d9b8d2b99969"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();