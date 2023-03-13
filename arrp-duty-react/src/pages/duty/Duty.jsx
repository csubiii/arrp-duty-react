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
      {serviceDataList.map((list) => {
        return (
          <div className="duty-container" key={list.id}>
            <h1>Üdv! {list.username}</h1>
            <p className="duty-time">Szolgálatban töltött idő: {Math.floor(timer % (3600*24) / 3600)} óra {Math.floor(timer % 3600 / 60)} perc {Math.floor(timer % 60)} mp</p>
            <DutyUpdateStarts handleStart={handleStart} username={list.username} getServiceData={getServiceData} docId={list.id} />
            <p className="duty-end-date">Utolsó leadás ideje: {list.endDate || "2023/01/01"} {list.endTime || "00:00:00"}</p>
            <DutyUpdateEnds dutyTime={list.dutyTime} timer={timer} getServiceData={getServiceData} docId={list.id} />
            <p className="duty-time-all">Szolgálati időd összesen: {Math.floor(list.dutyTime % (3600*24) / 3600)} óra {Math.floor(list.dutyTime % 3600 / 60)} perc {Math.floor(list.dutyTime % 60)} mp</p>
            <div><LogOut /></div>
        </div>
        )
      })}
    </div>
  )
}

export default Duty