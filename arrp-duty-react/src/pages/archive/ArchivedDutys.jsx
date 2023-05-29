import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const ArchivedDutys = () => {
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

  console.log(
    leaderboardDataList.map((list) => {
      return list.username;
    })
  );

  const dutyData3 = [
    {
      username: "Ryan Walken",
      time: "00:00:00",
      comment: "Warn - Távozás"
    },
    {
      username: "Lakatos Zolika",
      time: "14:01:32",
      comment: "-"
    },
    {
      username: "Jonny Williems",
      time: "35:21:17",
      comment: "Prémium IV."
    },
    {
      username: "Gery Miler",
      time: "20:23:20",
      comment: "-"
    },
    {
      username: "White Isaac",
      time: "12:58:46",
      comment: "-"
    },
    {
      username: "Daniel White",
      time: "00:00:26",
      comment: "Lefokozás"
    },
    {
      username: "Rocky Rambo",
      time: "00:00:00",
      comment: "Warn"
    },
    {
      username: "Burke Noel",
      time: "46:22:24",
      comment: "Prémium III."
    },
    {
      username: "Szurmaj Alfred",
      time: "28:37:29",
      comment: "Prémium V."
    },
    {
      username: "Adam Walker",
      time: "00:00:00",
      comment: "Warn - Távozás"
    },
    {
      username: "Noah Hill",
      time: "19:48:29",
      comment: "-"
    },
    {
      username: "Seranko Natasha",
      time: "127:52:44",
      comment: "Prémium I."
    },
    {
      username: "Carlos Ryan",
      time: "15:01:57",
      comment: "-"
    },
    {
      username: "James Willson",
      time: "25:45:15",
      comment: "-"
    },
    {
      username: "Latorre Santiago",
      time: "00:05:01",
      comment: "Szabadság"
    },
    {
      username: "Lucifer Morningstar",
      time: "47:39:18",
      comment: "Prémium II."
    },
    {
      username: "Jake Hill",
      time: "04:12:44",
      comment: "Ciklusbelépő"
    },
    {
      username: "Andrew Carl",
      time: "00:00:00",
      comment: "Warn"
    },
    {
      username: "Mano Maki",
      time: "30:07:57",
      comment: "-"
    },
    {
      username: "James Bulger",
      time: "04:34:27",
      comment: "Szabadság"
    },
    {
      username: "Rantot Tamas",
      time: "28:25:22",
      comment: "-"
    },
    {
      username: "Lakatos Capy",
      time: "04:05:50",
      comment: "Ciklusbelépő"
    },
    {
      username: "William Brown",
      time: "00:41:22",
      comment: "Ciklusbelépő"
    },
    {
      username: "Alex Berger",
      time: "00:00:00",
      comment: "Warn"
    },
    {
      username: "Matthew Hardy",
      time: "00:00:00",
      comment: "Warn"
    },
    {
      username: "Szurmaj Romeo",
      time: "32:18:32",
      comment: "-"
    },
    {
      username: "Angster Jan",
      time: "15:17:03",
      comment: "-"
    },
    {
      username: "Reed John",
      time: "00:00:00",
      comment: "Nyugállomány"
    },
    {
      username: "Lorenzo Rossi",
      time: "23:09:00",
      comment: "-"
    },
    {
      username: "James Watson",
      time: "00:00:00",
      comment: "Nem regisztrált"
    },
    {
      username: "Szop Tamás",
      time: "00:00:00",
      comment: "Warn - Távozás"
    },
   
  ];

  const dutyData4 = [
    {
      username: "Lakatos Zolika",
      time: "00:31:19",
      comment: "Szabadság"
    },
    {
      username: "Jonny Williems",
      time: "24:37:51",
      comment: "Prémium III."
    },
    {
      username: "Gery Miler",
      time: "10:37:47",
      comment: "-"
    },
    {
      username: "White Isaac",
      time: "10:51:52",
      comment: "-"
    },
    {
      username: "Daniel White",
      time: "42:06:08",
      comment: "Prémium II."
    },
    {
      username: "Rocky Rambo",
      time: "00:00:00",
      comment: "Szabadság"
    },
    {
      username: "James Watson",
      time: "10:22:52",
      comment: "-"
    },
    {
      username: "Burke Noel",
      time: "25:20:10",
      comment: "Felmondás"
    },
    {
      username: "Szurmaj Alfred",
      time: "00:00:00",
      comment: "Felmondás"
    },
    {
      username: "Noah Hill",
      time: "11:28:15",
      comment: "-"
    },
    {
      username: "Seranko Natasha",
      time: "143:01:49",
      comment: "Prémium I."
    },
    {
      username: "Carlos Ryan",
      time: "33:19:13",
      comment: "Felmondás"
    },
    {
      username: "James Willson",
      time: "11:57:03",
      comment: "-"
    },
    {
      username: "Thomas Orosz",
      time: "20:31:25",
      comment: "Ciklusbelépő"
    },
    {
      username: "Latorre Santiago",
      time: "00:00:00",
      comment: "2. Warn"
    },
    {
      username: "Lucifer Morningstar",
      time: "02:58:37",
      comment: "Szabadság"
    },
    {
      username: "Jake Hill",
      time: "04:26:54",
      comment: "1. Warn"
    },
    {
      username: "Andrew Carl",
      time: "00:00:00",
      comment: "Felmondás"
    },
    {
      username: "Mano Maki",
      time: "00:00:00",
      comment: "Szabadság"
    },
    {
      username: "James Bulger",
      time: "09:19:09",
      comment: "Szabadság"
    },
    {
      username: "Rantot Tamas",
      time: "12:30:31",
      comment: "-"
    },
    {
      username: "Lakatos Capy",
      time: "06:55:29",
      comment: "1. Warn"
    },
    {
      username: "William Brown",
      time: "00:00:00",
      comment: "1. Warn"
    },
    {
      username: "Alex Berger",
      time: "00:00:00",
      comment: "3. Warn - Távozás"
    },
    {
      username: "Matthew Hardy",
      time: "00:00:00",
      comment: "2. Warn"
    },
    {
      username: "Szurmaj Romeo",
      time: "01:25:19",
      comment: "Felmondás"
    },
    {
      username: "Kiss Peter",
      time: "15:56:41",
      comment: "Ciklusbelépő"
    },
    {
      username: "Angster Jan",
      time: "00:00:00",
      comment: "1. Warn"
    },
    {
      username: "Itadori Yuuji",
      time: "00:07:40",
      comment: "Ciklusbelépő"
    },
    {
      username: "Lorenzo Rossi",
      time: "43:34:39",
      comment: "Felmondás"
    },
   
  ];

  return (
    <div className="archived-container">

      <table className="table">
        <thead>
            <th colspan="3">3. Ciklus - 05.01-05.15</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData3.map((data, id) => {
            return (
              <tr key={id}>
                <td> {data.username} </td>
                <td className="time">{data.time}</td>
                <td className="time">{data.comment}</td>
              </tr>
            );
          })}{" "}
        </tbody>
      </table>

      <table className="table">
        <thead>
            <th colspan="3">4. Ciklus - 05.15-05.29</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData4.map((data, id) => {
            return (
              <tr key={id}>
                <td> {data.username} </td>
                <td className="time">{data.time}</td>
                <td className="time">{data.comment}</td>
              </tr>
            );
          })}{" "}
        </tbody>
      </table>

    </div>
  );
};

export default ArchivedDutys;
