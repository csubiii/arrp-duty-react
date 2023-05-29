import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

const Leaderboard = () => {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);
  const serviceRef = collection(db, "Service");

  const [leaderboardDataList, setLeaderboardDataList] = useState([]);

  const getLeaderboardData = async () => {
    const data = await getDocs(serviceRef);
    setLeaderboardDataList(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  useEffect(() => {
    getLeaderboardData();
  }, []);

  return (
    <>
      {user ? (
        <>
          <Link to={"/archívum"} className="archived">Arhivált Idők</Link>
          <table className="table">
            <thead>
              <tr>
                <th>N&eacute;v</th>
                <th>Idő</th>
              </tr>
            </thead>
            <tbody>
              {" "}
              {leaderboardDataList.map((list, id) => {
                return (
                  <tr key={id}>
                    <td> {list.username} </td>
                    <td className="time">
                      {Math.floor(list.dutyTime / 3600)} óra{" "}
                      {Math.floor((list.dutyTime % 3600) / 60)} perc{" "}
                      {Math.floor((list.dutyTime % 3600) % 60)} mp
                    </td>
                  </tr>
                );
              })}{" "}
            </tbody>
          </table>
        </>
      ) : (
        navigate("/")
      )}{" "}
    </>
  );
};

export default Leaderboard;
