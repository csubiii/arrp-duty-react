import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { useState, useEffect } from "react"
import { db, auth } from "../../config/firebase"
import { useForm } from "react-hook-form";

const DutyUpdateEnds = ({ docId,  getServiceData, count, dutyTime, username }) => {

  const [ endDate, setEndDate] = useState(0);
  const [ endTime, setEndTime] = useState(0);
  const { handleSubmit } = useForm();

  const [user] = useAuthState(auth);
  const docRef = doc(db, "Service", docId);
  const colRef = collection(docRef, `${username} SzolgálatKilépésDátuma`);

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

    setEndDate(`${year}/${month}/${day}`);
    setEndTime(`${hour}:${minute}:${second}`);
  }
  
  const updateEndTimeAndDate = async() => {
    await updateDoc(docRef, {
      endDate: endDate,
      endTime: endTime,
      dutyTime: dutyTime + count,
    })
    getServiceData();
    window.location.reload(false);
  }

  const addEndTimeAndEnd = async () => {
   await addDoc(colRef, {
      endDate: endDate,
      endTime: endTime,
     });
     updateEndTimeAndDate();
 }

 useEffect(() => {
  getTimeAndDate();
 })
 

  return (
    <>
     <form onSubmit={handleSubmit(addEndTimeAndEnd)}>
      <input className="duty-ends-btn"  type="submit" value={"Szolgálat leadás"} />
    </form>
      {/* <button className="duty-ends-btn" onClick={updateEndTimeAndDate}>Szolgálat leadás</button> */}
    </>

    
  )
}

export default DutyUpdateEnds