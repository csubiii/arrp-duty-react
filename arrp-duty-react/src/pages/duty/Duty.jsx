import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import DutyUpdateEnds from "./DutyUpdateEnds";
import DutyUpdateStarts from "./DutyUpdateStarts";
import LogOut from"../LogOut"

const Duty = () => {

  const [user] = useAuthState(auth);
  const serviceRef = collection(db, "Service");

  const [ serviceDataList, setServiceDataList ] = useState([]);
  const [timer, setTimer] = useState(0);
  const countRef = useRef(null);

  const handleStart = () => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

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
      {serviceDataList.map((a) => {
        return (
          <div key={a.id}>
            <h1>Üdv! {a.username}</h1>
            <p>Utolsó elindítás ideje: {timer} mp {a.startDate} {a.startTime}</p>
            <DutyUpdateStarts handleStart={handleStart} username={a.username} getServiceData={getServiceData} docId={a.id} />
            <p>Utolsó leadás ideje: {a.endDate} {a.endTime}</p>
            <DutyUpdateEnds dutyTime={a.dutyTime} timer={timer} getServiceData={getServiceData} docId={a.id} />
            <p>Szolgálati időd összesen: {a.dutyTime} mp</p>
            <div><LogOut /></div>
        </div>
        )
      })}
    </div>
  )
}

export default Duty