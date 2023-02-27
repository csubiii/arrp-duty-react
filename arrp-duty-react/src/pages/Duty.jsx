import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import LogOut from './LogOut'
import DutyData from "./DutyData";

const Duty = () => {

  const [user] = useAuthState(auth);
  const serviceRef = collection(db, "Service");

  const [ serviceDataList, setServiceDataList ] = useState([]);

  const q = query(serviceRef, where("userId", "==", user.uid))

  const getServiceData = async () => {
    const data = await getDocs(q)
    setServiceDataList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }
  
  useEffect(() => {
    getServiceData();
  }, [])

  console.log(serviceDataList)

  return (
    <>
    {serviceDataList.map((doc) => <DutyData key={doc.id} userId={doc.userId} startTime={doc.startTime} endTime={doc.endTime} serviceTime={doc.serviceTime} username={doc.username} /> )}
    </>
  )
}

export default Duty