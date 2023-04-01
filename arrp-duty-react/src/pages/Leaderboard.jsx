import {collection, getDocs} from 'firebase/firestore';
import {auth, db} from "../config/firebase";
import {useState, useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useNavigate } from "react-router-dom";


const Leaderboard = () => {

  const navigate = useNavigate();

  const [user] = useAuthState(auth);
  const serviceRef = collection(db, "Service");

  const [leaderboardDataList, setLeaderboardDataList] = useState([]);

  const getLeaderboardData = async () => {
    const data = await getDocs(serviceRef)
    setLeaderboardDataList(data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    })))
  }

  useEffect(() => {
    getLeaderboardData();
  }, [])


  return (
    <>
      { user 
      ?
      <div className='leaderboard-container'>
        <h1>Statisztika</h1>
      <ul>
      {
      leaderboardDataList.map((list, id) => {
        return (
          
            <li key={
              id
            }>
             <p>
              {list.username} <span>{Math.floor(list.dutyTime % (3600*24) / 3600)} óra {Math.floor(list.dutyTime % 3600 / 60)} perc {Math.floor(list.dutyTime % 60)} mp</span>
            </p>
            </li>
        )
      })
    } 
      </ul>
    </div>
      : navigate("/")
      }
    </>
  )
}

export default Leaderboard
