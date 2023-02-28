import React from 'react'
import LogOut from '../LogOut'
import DutyGetStartDate from './DutyGetStartDate'

const DutyData = ({ docId, userId, endDate, startDate, startTime, endTime, username }) => {
  return (
    <div className={docId}>
    <h1>Üdv! {username}</h1>
    <p>{userId}</p>
    <p>Utolsó elindítás ideje: {startDate} {startTime}</p>
    <DutyGetStartDate />
    <p>Utolsó leadás ideje: {endDate} {endTime}</p>
    <LogOut />
    </div>
  )
}

export default DutyData