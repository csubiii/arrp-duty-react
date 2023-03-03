import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import DutyUpdateEnds from "./DutyUpdateEnds";
import DutyUpdateStarts from "./DutyUpdateStarts";
import LogOut from"../LogOut"

const Duty = () => {

  const [user] = useAuthState(auth);
  const serviceRef = collection(db, "Service");

  const [ serviceDataList, setServiceDataList ] = useState([]);

  const q = query(serviceRef, where("userId", "==", user.uid))

  const getServiceData = async () => {
    const data = await getDocs(q)
    setServiceDataList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  useEffect(() => {
    getServiceData();
  }, [])
  

  return (
    <div>
      {serviceDataList.map((a) => {
        return (
          <div key={a.id}>
            <h1>Üdv! {a.username}</h1>
            <p>Utolsó elindítás ideje: {a.startDate} {a.startTime}</p>
            <DutyUpdateStarts getServiceData={getServiceData} docId={a.id} />
            <p>Utolsó leadás ideje: {a.endDate} {a.endTime}</p>
            <DutyUpdateEnds getServiceData={getServiceData} docId={a.id} />
            <div><LogOut /></div>
        </div>
        )
      })}
    </div>
  )
}

export default Duty