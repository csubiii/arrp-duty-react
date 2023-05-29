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

  const users = [
    "lakatos zolika",
    "Jonny Williems",
    "Gery Miler",
    "White Isaac",
    "Daniel White",
    "Rocky Rambo",
    "James Watson",
    "Burke Noel",
    "Szurmaj Alfred",
    "Noah Hill",
    "Seranko Natasha",
    "Carlos Ryan",
    "James Willson",
    "Thomas Orosz",
    "Latorre Santiago",
    "Lucifer Morningstar",
    "Jake Hill",
    "Andrew Carl",
    "Mano Maki",
    "James Bulger",
    "csubi",
    "Rantot Tamas",
    "Lakatos Capy",
    "William Brown",
    "Alex Berger",
    "Matthew Hardy",
    "Szurmaj Romeo",
    "Kiss Peter",
    "Angster Jan",
    "Itadori Yuuji",
    "Reed John",
    "Lorenzo Rossi",
  ];

  const dutyData = [
    {
      username: "Ryan Walken",
      time: "00 óra 00 perc 00 mp",
      comment: "Warn - Távozás"
    },
    {
      username: "Lakatos Zolika",
      time: "14 óra 1 perc 32 mp",
      comment: "-"
    },
    {
      username: "Jonny Williems",
      time: "35 óra 21 perc 17 mp",
      comment: "Prémium IV."
    },
    {
      username: "Gery Miler",
      time: "20 óra 23 perc 20 mp",
      comment: "-"
    },
    {
      username: "White Isaac",
      time: "12 óra 58 perc 46 mp",
      comment: "-"
    },
    {
      username: "Daniel White",
      time: "00 óra 00 perc 26 mp",
      comment: "Lefokozás"
    },
    {
      username: "Rocky Rambo",
      time: "00 óra 00 perc 00 mp",
      comment: "Warn"
    },
    {
      username: "Burke Noel",
      time: "46 óra 22 perc 24 mp",
      comment: "Prémium III."
    },
    {
      username: "Szurmaj Alfred",
      time: "28 óra 37 perc 29 mp",
      comment: "Prémium V."
    },
    {
      username: "Adam Walker",
      time: "00 óra 00 perc 00 mp",
      comment: "Warn - Távozás"
    },
    {
      username: "Noah Hill",
      time: "19 óra 48 perc 29 mp",
      comment: "-"
    },
    {
      username: "Seranko Natasha",
      time: "127 óra 52 perc 44 mp",
      comment: "Prémium I."
    },
    {
      username: "Carlos Ryan",
      time: "15 óra 01 perc 57 mp",
      comment: "-"
    },
    {
      username: "James Willson",
      time: "25 óra 45 perc 15 mp",
      comment: "-"
    },
    {
      username: "Latorre Santiago",
      time: "00 óra 05 perc 01 mp",
      comment: "Szabadság"
    },
    {
      username: "Lucifer Morningstar",
      time: "47 óra 39 perc 18 mp",
      comment: "Prémium II."
    },
    {
      username: "Jake Hill",
      time: "04 óra 12 perc 44 mp",
      comment: "Ciklusbelépő"
    },
    {
      username: "Andrew Carl",
      time: "00 óra 00 perc 00 mp",
      comment: "Warn"
    },
    {
      username: "Mano Maki",
      time: "30 óra 07 perc 57 mp",
      comment: "-"
    },
    {
      username: "James Bulger",
      time: "04 óra 34 perc 27 mp",
      comment: "Szabadság"
    },
    {
      username: "Rantot Tamas",
      time: "28 óra 25 perc 22 mp",
      comment: "-"
    },
    {
      username: "Lakatos Capy",
      time: "04 óra 05 perc 50 mp",
      comment: "Ciklusbelépő"
    },
    {
      username: "William Brown",
      time: "00 óra 41 perc 22 mp",
      comment: "Ciklusbelépő"
    },
    {
      username: "Alex Berger",
      time: "00 óra 00 perc 00 mp",
      comment: "Warn"
    },
    {
      username: "Matthew Hardy",
      time: "00 óra 00 perc 00 mp",
      comment: "Warn"
    },
    {
      username: "Szurmaj Romeo",
      time: "32 óra 18 perc 32 mp",
      comment: "-"
    },
    {
      username: "Angster Jan",
      time: "15 óra 17 perc 03 mp",
      comment: "-"
    },
    {
      username: "Reed John",
      time: "00 óra 00 perc 00 mp",
      comment: "Nyugállomány"
    },
    {
      username: "Lorenzo Rossi",
      time: "23 óra 09 perc 00 mp",
      comment: "-"
    },
    {
      username: "James Watson",
      time: "00 óra 00 perc 00 mp",
      comment: "Nem regisztrált"
    },
    {
      username: "Szop Tamás",
      time: "00 óra 00 perc 00 mp",
      comment: "Warn - Távozás"
    },
   
  ];

  const dutyData2 = [
    {
      username: "csubi",
      time: "100 óra 10 perc 10 mp",
      comment: "100"
    },
    {
      username: "csubi",
      time: "5 óra 5 perc 5 mp",
      comment: "Hello"
    },
    {
      username: "csubi",
      time: "9 óra 9 perc 9 mp",
      comment: "9"
    },
    {
      username: "csubi",
      time: "100 óra 1 perc 1 mp",
      comment: "test"
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
          {dutyData.map((data, id) => {
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
          {dutyData2.map((data, id) => {
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
