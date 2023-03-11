import { doc, updateDoc } from "firebase/firestore"
import { useState, useEffect } from "react"
import { db } from "../../config/firebase"

const DutyUpdateEnds = ({ docId,  getServiceData, timer, dutyTime }) => {

  const [ endDate, setEndDate] = useState(0);
  const [ endTime, setEndTime] = useState(0);

  const serviceDocRef = doc(db, 'Service', docId)

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
    await updateDoc(serviceDocRef, {
      endDate: endDate,
      endTime: endTime,
      dutyTime: dutyTime + timer,
    })
    getServiceData();
    window.location.reload(false);
  }

 useEffect(() => {
  getTimeAndDate();
 })
 

  return (
    <>
      <button onClick={updateEndTimeAndDate} style={{background: "red", color: "white"}}>Szolgálat leadás</button>
    </>

    
  )
}

export default DutyUpdateEnds