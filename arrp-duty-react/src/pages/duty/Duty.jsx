import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
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

  return (
    <div>
    {serviceDataList.map((service) => <DutyData key={service.id} docId={service.id} startDate={service.startDate} endDate={service.endDate} userId={service.userId} startTime={service.startTime} endTime={service.endTime} username={service.username} /> )}
    </div>
  )
}

export default Duty