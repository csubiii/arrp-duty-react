import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import DutyUpdateEnds from "./DutyUpdateEnds";
import DutyUpdateStarts from "./DutyUpdateStarts";
import LogOut from"../LogOut"
import Leaderboard from "../Leaderboard";

const Duty = () => {

  const [user] = useAuthState(auth);
  const serviceRef = collection(db, "Service");

  const [ serviceDataList, setServiceDataList ] = useState([]);
  const [count, setCount] = useState(0);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      
      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      setCount(prevCount => (prevCount + deltaTime * 0.001) % 99999);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
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
          <>
            <h1 className="welcome">Üdv! {list.username}</h1>
          <div className="duty-container" key={list.id}>
            <div className="duty-items">
              <p className="duty-time">Szolgálatban töltött idő: {Math.floor(count % (3600*24) / 3600)} óra {Math.floor(count % 3600 / 60)} perc {Math.floor(count % 60)} mp</p>
              <DutyUpdateStarts animate={animate} username={list.username} getServiceData={getServiceData} docId={list.id} />
              <p className="duty-end-date">Utolsó leadás ideje: {list.endDate || "2023/01/01"} {list.endTime || "00:00:00"}</p>
              <DutyUpdateEnds dutyTime={list.dutyTime} username={list.username} count={Math.round(count)} getServiceData={getServiceData} docId={list.id} />
            </div>
              <div className="duty-side">
                <div className="duty-side-items">
                <p className="duty-time-all">Szolgálati időd összesen: {Math.floor(list.dutyTime % (3600*24) / 3600)} óra {Math.floor(list.dutyTime % 3600 / 60)} perc {Math.floor(list.dutyTime % 60)} mp</p>
                  <a href="https://www.google.com/forms/about/" target="_blank" className="report-btn" >Hibabejelentés</a>
                  <Link className='leaderboard-btn' to="/ranglista" target="_blank">Szolgálati Statisztika</Link>
                  <LogOut />
                </div>
              </div>
        </div>
        </>
        )
      })}
    </div>
  )
}

export default Duty