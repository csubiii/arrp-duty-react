import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from "../config/firebase";
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'


const Leaderboard = () => {

  const [user] = useAuthState(auth);
  const serviceRef = collection(db, "Service");

  const [ leaderboardDataList, setLeaderboardDataList ] = useState([]);

    const getLeaderboardData = async () => {
    const data = await getDocs(serviceRef)
    setLeaderboardDataList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  useEffect(() => {
    getLeaderboardData();
  }, [])
  

  return (
    <>
    { user ?
    <div>
    {leaderboardDataList.map((list) => {
      return (
        <ul className='leaderboard-container' key={list.id}>
            <li>
              <h3>
              {list.username} {Math.floor(list.dutyTime % (3600*24) / 3600)} óra {Math.floor(list.dutyTime % 3600 / 60)} perc {Math.floor(list.dutyTime % 60)} mp
              </h3>
            </li>
       </ul>
      )
    })}
  </div>
  :  <h1 style={{textAlign: "center"}} >Jelentkezz be kérlek</h1>}
  </>
  )
}

export default Leaderboard