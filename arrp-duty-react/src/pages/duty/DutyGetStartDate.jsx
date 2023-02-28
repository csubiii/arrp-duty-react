import { useState } from "react"

const DutyGetStartDate = () => {

  const [ startDate, setStartDate] = useState(0)


  const getStartDate = () => {
    const currentDate = new Date()
    const second = currentDate.getSeconds();
    const minute = currentDate.getMinutes();
    const hour = currentDate.getHours();
    setStartDate(`${hour}:${minute}:${second}`);
  }

  return (
    <button style={{background: "green", color: "pink"}}>Szolgálatba lépés</button>
  )
}

export default DutyGetStartDate