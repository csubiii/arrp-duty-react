import { auth, db } from "../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect, useState } from "react";
import DutyPanel from "./DutyPanel";


const Duty = () => {

  const [user] = useAuthState(auth);
  const serviceRef = collection(db, "Szolgálat");

  const [ docList, setDocList] = useState([]);

  const q = query(serviceRef, where("startTime", "==", "startTime"))

  const getDocList = async () => {
    const data = await getDocs(q)
    setDocList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  useEffect(() => {
    getDocList();
  })


  return (
    <>
    {user ? <DutyPanel /> : <h1>pls log in</h1> }
    {docList.map((doc) => <DutyPanel key={doc.id} StartTime={doc.StartTime} /> )}
    </>
  )
}

export default Duty