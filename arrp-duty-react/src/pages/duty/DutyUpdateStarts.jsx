import { doc, updateDoc } from "firebase/firestore"
import { useState, useEffect } from "react"
import { db } from "../../config/firebase"

const DutyUpdateStarts = ({ docId }) => {

  const [ startDate, setStartDate] = useState(0)
  const [ startTime, setStartTime] = useState(0)

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

    setStartDate(`${year}:${month}:${day}`)
    setStartTime(`${hour}:${minute}:${second}`);    
  }
  
  const updateStartTimeAndDate = async() => {
    await updateDoc(serviceDocRef, {
      startDate: startDate,
      startTime: startTime,
    })
  }

 useEffect(() => {
  getTimeAndDate();
 })
 

  return (
    <button onClick={updateStartTimeAndDate} style={{background: "green", color: "pink"}}>Szolgálatba lépés {docId}</button>
  )
}

export default DutyUpdateStarts