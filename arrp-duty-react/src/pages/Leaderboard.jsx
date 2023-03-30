import {collection, getDocs} from 'firebase/firestore';
import {auth, db} from "../config/firebase";
import {useState, useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'


const Leaderboard = () => {

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
    <div className='leaderboard-container'>
      <ul>
      {
      leaderboardDataList.map((list) => {
        return (
          
            <li key={
              list.id
            }>
             <p>
              {list.username} {Math.floor(list.dutyTime % (3600*24) / 3600)} óra {Math.floor(list.dutyTime % 3600 / 60)} perc {Math.floor(list.dutyTime % 60)} mp
            </p>
            </li>
        )
      })
    } 
      </ul>
    </div>
  )
}

export default Leaderboard
