{/* import React from 'react'
import LogOut from '../LogOut'
import DutyUpdateEnds from './DutyUpdateEnds'
import DutyUpdateStarts from './DutyUpdateStarts'

const DutyData = ({ docId, userId, endDate, startDate, startTime, endTime, username }) => {

   const search = ' ';
  const replaceWith = "";
  const numStartTime = Number(startTime.split(search).join(replaceWith));
  const numEndTime = Number(endTime.split(search).join(replaceWith));
  console.log(typeof numStartTime, numEndTime)

  return (
    <div>
    <h1>Üdv! {username}</h1>
    <p>{userId}</p>
    <p>Utolsó elindítás ideje: {startDate} {startTime}</p>
    <DutyUpdateStarts docId={docId} />
    <p>Utolsó leadás ideje: {endDate} {endTime}</p>
    <DutyUpdateEnds docId={docId} />
    <div><LogOut /></div>
    <p>Szolgálati idő:</p>
    </div>
  )
}

export default DutyData */}