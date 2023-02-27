import React from 'react'
import LogOut from './LogOut'

const DutyData = ({ key, userId, startTime, endTime, serviceTime, username }) => {
  return (
    <div className={key}>
    <LogOut />
    <p>{userId}</p>
    <p>{startTime}</p>
    <p>{endTime}</p>
    <p>{serviceTime}</p>
    <p>{username}</p>
    </div>
  )
}

export default DutyData