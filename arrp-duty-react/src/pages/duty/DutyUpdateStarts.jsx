import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection, doc, query, where } from "firebase/firestore"
import { useState, useEffect, useRef } from "react"
import { db, auth } from "../../config/firebase"
import { useForm } from "react-hook-form";
import DutyUpdateEnds from "./DutyUpdateEnds";

const DutyUpdateStarts = ({ docId, getServiceData, username, handleStart, timer, formatTime }) => {

  const [ startDate, setStartDate ] = useState(0);
  const [ startTime, setStartTime ] = useState(0);
  const [ isDisabled, setIsDisabled ] = useState(false);
  const { handleSubmit } = useForm();

  const [user] = useAuthState(auth);
  const docRef = doc(db, "Service", docId);
  const colRef = collection(docRef, `${username} SzolgálatbalépésDátuma`);
  const getTimeAndDate = () => {
    
    let currentDate = new Date()
    let second = currentDate.getSeconds();
    let minute = currentDate.getMinutes();
    let hour = currentDate.getHours();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();

    if(minute < 10 ) {
      minute = `0${minute}`
    }

    if(second < 10) {
      second = `0${second}`
    }

    if(month < 10 ) {
      month = `0${month}`
    }

    if(day < 10) {
      day = `0${day}`
    }

    setStartDate(`${year}/${month}/${day}`);
    setStartTime(`${hour}:${minute}:${second}`);   
  }
  
  const addStartTimeAndDate = async () => {
    setIsDisabled(true);
   await addDoc(colRef, {
      startDate: startDate,
      startTime: startTime,
     });
   handleStart();
   getServiceData();
 }


 useEffect(() => {
  getTimeAndDate();
});

  return (
    <>
    <form onSubmit={handleSubmit(addStartTimeAndDate)}>
      <input style={{background: "green", color: "white"}} disabled={isDisabled} type="submit" value={isDisabled ? "Sikeres Belépés" : "Szolgálatba Lépés"} />
    </form>
    </>
  )
}

export default DutyUpdateStarts