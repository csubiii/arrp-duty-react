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
    {username: "Ryan Walken", time: "00:00:00", comment: "Warn - Távozás"},
    {username: "Lakatos Zolika", time: "14:01:32", comment: "-"},
    {username: "Jonny Williems", time: "35:21:17", comment: "Prémium IV."},
    {username: "Gery Miler", time: "20:23:20", comment: "-"},
    {username: "White Isaac",time: "12:58:46", comment: "-"},
    {username: "Daniel White", time: "00:00:26", comment: "Lefokozás"},
    {username: "Rocky Rambo", time: "00:00:00", comment: "Warn"},
    {username: "Burke Noel", time: "46:22:24", comment: "Prémium III."},
    {username: "Szurmaj Alfred",time: "28:37:29",comment: "Prémium V."},
    {username: "Adam Walker",time: "00:00:00",comment: "Warn - Távozás"},
    {username: "Noah Hill",time: "19:48:29",comment: "-"},
    {username: "Seranko Natasha",time: "127:52:44",comment: "Prémium I."},
    {username: "Carlos Ryan",time: "15:01:57",comment: "-"},
    {username: "James Willson",time: "25:45:15",comment: "-"},
    {username: "Latorre Santiago",time: "00:05:01",comment: "Szabadság"},
    {username: "Lucifer Morningstar",time: "47:39:18",comment: "Prémium II."},
    {username: "Jake Hill",time: "04:12:44",comment: "Ciklusbelépő"},
    {username: "Andrew Carl",time: "00:00:00",comment: "Warn"},
    {username: "Mano Maki",time: "30:07:57",comment: "-"},
    {username: "James Bulger",time: "04:34:27",comment: "Szabadság"},
    {username: "Rantot Tamas",time: "28:25:22",comment: "-"},
    {username: "Lakatos Capy",time: "04:05:50",comment: "Ciklusbelépő"},
    {username: "William Brown",time: "00:41:22",comment: "Ciklusbelépő"},
    {username: "Alex Berger",time: "00:00:00",comment: "Warn"},
    {username: "Matthew Hardy",time: "00:00:00",comment: "Warn"},
    {username: "Szurmaj Romeo",time: "32:18:32",comment: "-"},
    {username: "Angster Jan",time: "15:17:03",comment: "-"},
    {username: "Reed John",time: "00:00:00",comment: "Nyugállomány"},
    {username: "Lorenzo Rossi",time: "23:09:00",comment: "-"},
    {username: "James Watson",time: "00:00:00",comment: "Nem regisztrált"},
    {username: "Szop Tamás",time: "00:00:00",comment: "Warn - Távozás"}
  ];

  const dutyData4 = [
    {username: "Lakatos Zolika",time: "00:31:19",comment: "Szabadság"},
    {username: "Jonny Williems",time: "24:37:51",comment: "Prémium III."},
    {username: "Gery Miler",time: "10:37:47",comment: "-"},
    {username: "White Isaac",time: "10:51:52",comment: "-"},
    {username: "Daniel White",time: "42:06:08",comment: "Prémium II."},
    {username: "Rocky Rambo",time: "00:00:00",comment: "Szabadság"},
    {username: "James Watson",time: "10:22:52",comment: "-"},
    {username: "Burke Noel",time: "25:20:10",comment: "Felmondás"},
    {username: "Szurmaj Alfred",time: "00:00:00",comment: "Felmondás"},
    {username: "Noah Hill",time: "11:28:15",comment: "-"},
    {username: "Seranko Natasha",time: "143:01:49",comment: "Prémium I."},
    {username: "Carlos Ryan",time: "33:19:13",comment: "Felmondás"},
    {username: "James Willson",time: "11:57:03",comment: "-"},
    {username: "Thomas Orosz",time: "20:31:25",comment: "Ciklusbelépő"},
    {username: "Latorre Santiago",time: "00:00:00",comment: "2. Warn"},
    {username: "Lucifer Morningstar",time: "02:58:37",comment: "Szabadság"},
    {username: "Jake Hill",time: "04:26:54",comment: "1. Warn"},
    {username: "Andrew Carl",time: "00:00:00",comment: "Felmondás"},
    {username: "Mano Maki",time: "00:00:00",comment: "Szabadság"},
    {username: "James Bulger",time: "09:19:09",comment: "Szabadság"},
    {username: "Rantot Tamas",time: "12:30:31",comment: "-"},
    {username: "Lakatos Capy",time: "06:55:29",comment: "1. Warn"},
    {username: "William Brown",time: "00:00:00",comment: "1. Warn"},
    {username: "Alex Berger",time: "00:00:00",comment: "3. Warn - Távozás"},
    {username: "Matthew Hardy",time: "00:00:00",comment: "2. Warn"},
    {username: "Szurmaj Romeo",time: "01:25:19",comment: "Felmondás"},
    {username: "Kiss Peter",time: "15:56:41",comment: "Ciklusbelépő"},
    {username: "Angster Jan",time: "00:00:00",comment: "1. Warn"},
    {username: "Itadori Yuuji",time: "00:07:40",comment: "Ciklusbelépő"},
    {username: "Lorenzo Rossi",time: "43:34:39",comment: "Felmondás"}
  ];

const dutyData5 = [
    {username: "Della Rocco",time: "56:48:56",comment: "Prémium I."},
    {username: "Floyd Armando",time: "01:21:13",comment: "Ciklusbelépő"},
    {username: "Lakatos Zolika",time: "01:11:52",comment: "Szabadság"},
    {username: "Jonny Williems",time: "00:00:00",comment: "Felmondás"},
    {username: "Gery Miler",time: "00:29:09",comment: "Felmondás"},
    {username: "White Isaac",time: "06:34:17",comment: "Felmondás"},
    {username: "Daniel White",time: "02:44:03",comment: "Felmondás"},
    {username: "Rocky Rambo",time: "00:00:00",comment: "Szabadság"},
    {username: "James Watson",time: "00:00:00",comment: "Felmondás"},
    {username: "Noah Hill",time: "04:15:29",comment: "Szabadság"},
    {username: "Seranko Natasha",time: "07:53:07",comment: "Felmondás"},
    {username: "James Willson",time: "09:32:39",comment: "Szabadság"},
    {username: "Conor Gibson",time: "06:07:24",comment: "Ciklusbelépő"},
    {username: "Thomas Orosz",time: "13:31:13",comment: "-"},
    {username: "Latorre Santiago",time: "00:00:00",comment: "3. Warn - Távozás"},
    {username: "Lucifer Morningstar",time: "00:00:00",comment: "Szabadság"},
    {username: "Jake Hill",time: "03:16:42",comment: "2. Warn"},
    {username: "Mano Maki",time: "11:38:29",comment: "-"},
    {username: "James Bulger",time: "13:23:30",comment: "-"},
    {username: "Rantot Tamas",time: "08:56:24",comment: "Felmondás"},
    {username: "Kiss Marco",time: "11:46:03",comment: "-"},
    {username: "Lakatos Capy",time: "00:00:00",comment: "2. Warn"},
    {username: "William Brown",time: "00:00:00",comment: "2. Warn"},
    {username: "Matthew Hardy",time: "00:00:00",comment: "Szabadság"},
    {username: "Kiss Peter",time: "31:21:13",comment: "Prémium II."},
    {username: "Angster Jan",time: "00:00:00",comment: "Szabadság"},
    {username: "Itadori Yuuji",time: "00:00:00",comment: "Szabadság"},
    {username: "Kocsis Balint",time: "-",comment: "Nem regisztrált"},
    {username: "Pablo Chris",time: "-",comment: "Nem regisztrált"},
    {username: "John Hayden",time: "-",comment: "Nem regisztrált"}
];
const dutyData6 = [
  {username: "Pablo Chris",time: "05:44:58",comment: "Felmondás"},
  {username: "Della Rocco",time: "30:58:21",comment: "Prémium I."},
  {username: "Floyd Armando",time: "01:36:59",comment: "1. Warn"},
  {username: "Lakatos Zolika",time: "00:00:00",comment: "1. Warn"},
  {username: "Kiss Zsigmond",time: "06:28:10",comment: "Ciklusbelépő"},
  {username: "Rocky Rambo",time: "04:31:28",comment: "Szabadság"},
  {username: "Noah Hill",time: "00:00:00",comment: "Szabadság"},
  {username: "Nap Pali",time: "15:28:03",comment: "-"},
  {username: "James Willson",time: "10:12:41",comment: "-"},
  {username: "Conor Gibson",time: "00:00:00",comment: "1. Warn"},
  {username: "Thomas Orosz",time: "00:00:00",comment: "1. Warn"},
  {username: "Lucifer Morningstar",time: "00:00:00",comment: "2. Warn"},
  {username: "Jake Hill",time: "00:00:00",comment: "3. Warn - Távozás"},
  {username: "Mano Maki",time: "19:58:27",comment: "-"},
  {username: "John Hayden",time: "03:05:33",comment: "Felmondás"},
  {username: "James Bulger",time: "03:38:44",comment: "1. Warn"},
  {username: "Penki Gergo",time: "64:08:46",comment: "Felmondás"},
  {username: "Kiss Marco",time: "23:05:20",comment: "Prémium III."},
  {username: "Lakatos Capy",time: "00:00:00",comment: "Felmondás"},
  {username: "William Brown",time: "00:00:00",comment: "3. Warn - Távozás"},
  {username: "Matthew Hardy",time: "00:00:00",comment: "Szabadság"},
  {username: "Kiss Peter",time: "23:36:43",comment: "Prémium II."},
  {username: "Angster Jan",time: "00:00:00",comment: "2. Warn"},
  {username: "Itadori Yuuji",time: "00:00:00",comment: "1. Warn"},
  {username: "Kiss Krisztofer",time: "14:10:15",comment: "-"},
  {username: "Enzo Said",time: "03:27:04",comment: "Felmondás"},
  {username: "Kocsis Balint",time: "-",comment: "Kirúgás"},
  {username: "John Deer",time: "-",comment: "Regisztráció hiánya"},
]
const dutyData7 = [
  {username: "Della Rocco",time: "22:56:28",comment: "-"},
  {username: "Floyd Armando",time: "12:00:47",comment: "-"},
  {username: "Lakatos Zolika",time: "00:00:00",comment: "2. Warn"},
  {username: "Ludas Matyi",time: "09:39:39",comment: "Ciklusbelépő"},
  {username: "Olajos Feri",time: "24:59:03",comment: "-"},
  {username: "II Puzser Abraham",time: "10:25:13",comment: "-"},
  {username: "Daniel James",time: "53:49:12",comment: "Felmondás"},
  {username: "Kemal Teglas",time: "02:06:46",comment: "Ciklusbelépő"},
  {username: "Kiss Zsigmond",time: "27:10:56",comment: "-"},
  {username: "Rocky Rambo",time: "00:00:00",comment: "Szabadság"},
  {username: "John Deer",time: "00:00:00",comment: "Felmondás"},
  {username: "Noah Hill",time: "04:01:04",comment: "1. Warn"},
  {username: "Nap Pali",time: "00:00:00",comment: "Szabadság"},
  {username: "Wernher von Braun",time: "06:07:05",comment: "Ciklusbelépő"},
  {username: "Weimer Christian",time: "43:10:15",comment: "Prémium III."},
  {username: "Nagy Norman",time: "30:00:00",comment: "-"},
  {username: "Armando D Rodrigo",time: "08:37:46",comment: "Felmondás"},
  {username: "James Willson",time: "10:49:32",comment: "-"},
  {username: "Nagy Istvan",time: "11:11:52",comment: "-"},
  {username: "Conor Gibson",time: "05:42:47",comment: "2. Warn"},
  {username: "Nico Ferdmann",time: "18:15:29",comment: "-"},
  {username: "Thomas Orosz",time: "00:00:00",comment: "2. Warn"},
  {username: "Redd Jacob",time: "34:11:55",comment: "-"},
  {username: "Scott Ferdmann",time: "19:41:12",comment: "-"},
  {username: "Steve Jenkins",time: "42:21:50",comment: "Prémium IV."},
  {username: "Lucifer Morningstar",time: "00:00:00",comment: "Felmondás"},
  {username: "Tanacs Krisztian",time: "07:22:09",comment: "Ciklusbelépő"},
  {username: "Mano Maki",time: "39:22:41",comment: "Prémium V."},
  {username: "Burke Noel",time: "56:35:43",comment: "Prémium II."},
  {username: "James Bulger",time: "04:19:06",comment: "Felmondás"},
  {username: "Kiss Marco",time: "36:24:04",comment: "-"},
  {username: "Matthew Hardy",time: "00:00:00",comment: "3. Warn - Távozás"},
  {username: "Kiss Peter",time: "59:26:07",comment: "Prémium I."},
  {username: "Angster Jan",time: "00:00:00",comment: "Felmondás"},
  {username: "Knight Nicole",time: "12:39:46",comment: "-"},
  {username: "Itadori Yuuji",time: "00:00:00",comment: "2. Warn"},
  {username: "Kiss Krisztofer",time: "00:00:00",comment: "Szabadság"},
  {username: "Fikarc Nyi",time: "-",comment: "Regisztráció hiánya"},
  {username: "Kocsis Balint",time: "-",comment: "Regisztráció hiánya"}
]

const dutyData8 = [
  {username: "Latorre Santiago",time: "00:31:54",comment: "Ciklusbelépő"},
  {username: "Della Rocco",time: "29:56:19",comment: "-"},
  {username: "Floyd Armando",time: "17:20:48",comment: "-"},
  {username: "Lakatos Zolika",time: "00:00:00",comment: "3. Warn - Távozás"},
  {username: "Ludas Matyi",time: "22:40:40",comment: "-"},
  {username: "Olajos Feri",time: "03:14:40",comment: "Felmondás"},
  {username: "II Puzser Abraham",time: "05:10:03",comment: "Felmondás"},
  {username: "Kemal Teglas",time: "42:18:13",comment: "Prémium V."},
  {username: "Kiss Zsigmond",time: "48:18:46",comment: "Prémium IV."},
  {username: "Rocky Rambo",time: "01:06:05",comment: "Szabadság"},  
  {username: "Noah Hill",time: "11:32:54",comment: "-"},
  {username: "Nap Pali",time: "00:00:00",comment: "Szabadság"},
  {username: "Wernher Von Braun",time: "43:15:55",comment: "Kirúgás"},
  {username: "Weimer Christian",time: "03:43:52",comment: "1. Warn"},
  {username: "Nagy Norman",time: "00:25:59",comment: "Felmondás"},
  {username: "James Willson",time: "07:52:25",comment: "Szabadság"},
  {username: "Nagy Istvan",time: "05:46:37",comment: "Szabadság"},
  {username: "Conor Gibson",time: "00:00:00",comment: "Felmondás"},
  {username: "Nico Ferdmann",time: "35:13:50",comment: "-"},
  {username: "Thomas Orosz",time: "00:00:00",comment: "3. Warn - Távozás"},
  {username: "Redd Jacob",time: "61:21:55",comment: "Prémium II."},
  {username: "Scott Ferdmann",time: "36:00:35",comment: "-"},
  {username: "Steve Jenkins",time: "15:46:59",comment: "-"},
  {username: "Tanacs Krisztian",time: "04:43:23",comment: "Szabadság"},
  {username: "Mano Maki",time: "17:11:30",comment: "-"},
  {username: "Burke Noel",time: "11:37:08",comment: "-"},
  {username: "Kiss Marco",time: "58:51:00",comment: "Prémium III."},
  {username: "Nyikolaj Andrej",time: "12:30:21",comment: "-"},
  {username: "Kiss Peter",time: "72:28:29",comment: "Prémium I."},
  {username: "Knight Nicole",time: "06:31:19",comment: "1. Warn"},
  {username: "Itadori Yuuji",time: "00:00:00",comment: "Felmondás"},
  {username: "Beverneki Tamás",time: "16:52:37",comment: "-"},
  {username: "Kiss Krisztofer",time: "15:06:11",comment: "-"}
]

const dutyData9 = [
  {username: "Latorre Santiago",time: "07:32:20",comment: "Szabadság"},
  {username: "Della Rocco",time: "49:18:26",comment: "Prémium I."},
  {username: "Oszwald Edmund",time: "04:26:03",comment: "Ciklusbelépő"},
  {username: "Floyd Armando",time: "12:44:19",comment: "Kirúgás"},
  {username: "Randa Noel",time: "04:32:34",comment: "Ciklusbelépő"},
  {username: "Ludas Matyi",time: "30:46:33",comment: "Felmondás"},
  {username: "Antony Jackson",time: "05:10:02",comment: "Ciklusbelépő"},
  {username: "Kemal Teglas",time: "36:24:18",comment: "Prémium II."},
  {username: "Kiss Zsigmond",time: "49:58:29",comment: "Felmondás"},
  {username: "Quandale Dinglebingle",time: "31:13:29",comment: "Prémium III."},
  {username: "Johnson Jack",time: "21:53:04",comment: "-"},
  {username: "Rocky Rambo",time: "01:08:09",comment: "3. Warn - Kirúgás"},
  {username: "Gulyas Matyas",time: "01:45:46",comment: "Ciklusbelépő"},
  {username: "Noah Hill",time: "00:00:00",comment: "2. Warn"},
  {username: "Nap Pali",time: "00:00:00",comment: "Felmondás"},
  {username: "Kovacs Laszlo",time: "02:17:52",comment: "Ciklusbelépő"},
  {username: "Kennedy John",time: "08:40:01",comment: "Ciklusbelépő"},
  {username: "Weimer Christian",time: "00:00:00",comment: "2. Warn"},
  {username: "James Willson",time: "12:38:02",comment: "-"},
  {username: "Nagy Istvan",time: "00:00:00",comment: "Szabadság"},
  {username: "Nico Ferdmann",time: "05:45:36",comment: "Szabadság"},
  {username: "Victor Shelby",time: "00:00:00",comment: "Ciklusbelépő"},
  {username: "Williams Clark",time: "00:00:00",comment: "Ciklusbelépő"},
  {username: "Oszwald Zoltán",time: "03:01:20",comment: "Ciklusbelépő"},
  {username: "Redd Jacob",time: "15:19:09",comment: "Vezérkarba került"},
  {username: "Scott Ferdmann",time: "05:05:36",comment: "Szabadság"},
  {username: "Steve Jenkins",time: "21:14:21",comment: "-"},
  {username: "Hector Fernández",time: "04:40:39",comment: "Ciklusbelépő"},
  {username: "Tanacs Krisztan",time: "00:00:00",comment: "Felmondás"},
  {username: "Mano Maki",time: "11:57:48",comment: "Felmondás"},
  {username: "Burke Noel",time: "00:00:00",comment: "Felmondás"},
  {username: "Carlo Smith",time: "29:09:49",comment: "Prémium IV."},
  {username: "Kiss Marco",time: "50:07:10",comment: "Felmondás"},
  {username: "Tike Myson",time: "00:00:00",comment: "Ciklusbelépő"},
  {username: "Aryan Abdallah",time: "14:27:40",comment: "-"},
  {username: "Richard Wilson",time: "22:20:11",comment: "Prémium V."},
  {username: "Nyikolaj Andrej",time: "58:38:39",comment: "Felmondás"},
  {username: "Kovács Alexander",time: "15:27:40",comment: "-"},
  {username: "Kiss Peter",time: "23:56:37",comment: "Vezérkarba került"},
  {username: "Knight Nicole",time: "13:44:57",comment: "-"},
  {username: "Beverneki Tamás",time: "41:08:24",comment: "Felmondás"},
  {username: "Kiss Krisztofer",time: "85:37:48",comment: "Felmondás"},
  {username: "Richard Ottoman",time: "-",comment: "Regisztráció hiánya"},
  {username: "Bajszos Kálmán",time: "-",comment: "Regisztráció hiánya"}
]

const dutyData10 = [
  {username: "Latorre Santiago",	time: "07:37:44", comment: "Szabadság"},
  {username: "Della Rocco",	time: "17:32:11", comment: "-"},
  {username: "Randa Noel",	time: "19:06:44", comment: "-"},
  {username: "Antony Jackson",	time: "01:09:28", comment: "Felmondás"},
  {username: "Kemal Teglas",	time: "21:58:21", comment: "-" },
  {username: "Quandale Dinglebingle",	time: "17:57:39", comment: "Felmondás"},
  {username: "Redd Jack",	time: "17:56:32", comment: "-"},
  {username: "Gulyas Matyas",	time: "00:00:00", comment: "Szabadság"},
  {username: "Noah Hill",	time: "00:00:00", comment: "3. Warn - Kirúgás"},
  {username: "Kovacs Laszlo",	time: "00:00:00", comment: "Szabadság"},
  {username: "Kennedy John",	time: "20:12:05", comment: "Prémium III."},
  {username: "Weimer Christian",	time: "00:00:00", comment: "3. Warn - Kirúgás"},
  {username: "James Willson",	time: "11:41:36", comment: "-"},
  {username: "Nagy Istvan",	time: "04:03:30", comment: "1. Warn"},
  {username: "Nico Ferdmann",	time: "00:00:00", comment: "Felmondás" },
  {username: "Victor Shelby",	time: "00:00:00", comment: "Felmondás" },
  {username: "Williams Clark",	time: "70:15:27", comment: "Prémium I."},
  {username: "Oszwald Zoltán",	time: "11:47:32", comment: "-"},
  {username: "Scott Ferdmann",	time: "00:00:00", comment: "Felmondás" },
  {username: "Steve Jenkins",	time: "00:00:00", comment: "Szabadság"},
  {username: "Randa Alex",	time: "10:30:27", comment: "-"},
  {username: "Hector Fernández",	time: "12:11:49", comment: "Felmondás"},
  {username: "Carlo Smith",	time: "71:19:32", comment: "Felmondás" },
  {username: "Tike Myson",	time: "00:00:00", comment: "Felmondás"},
  {username: "Oszwald Edmund",	time: "19:48:55", comment: "-"},
  {username: "Aryan Abdallah",	time: "24:46:23", comment: "-"},
  {username: "Chao Lukas",	time: "08:54:29", comment: "Kirúgás"},
  {username: "Richard Wilson",	time: "18:43:28", comment: "-" },
  {username: "Kovács Alexander",	time: "42:20:55", comment: "Prémium II."},
  {username: "Knight Nicole",	time: "00:00:00", comment: "Szabadság"},
  {username: "Nagy János",	time: "-", comment: "Felmondás"},
  {username: "Bajszos Kálmán",	time: "-", comment: "Kirúgás"},
  {username: "Fikarc Nyi",	time: "-", comment: "Kirúgás"},
  {username: "Lucifer Morningstar",	time: "-", comment: "Kirúgás"}
]

const dutyData11 = [
  {username: "Latorre Santiago",	time: "00:00:00", comment: "Szabadság"},
  {username: "Della Rocco",	time: "25:54:30", comment: "Felmondás"},
  {username: "Randa Noel",	time: "10:46:15", comment: "Kirúgás - Feketelista"},
  {username: "Kemal Teglas",	time: "19:02:01", comment: "Kirúgás - Feketelista"},
  {username: "Redd Jack",	time: "01:21:23", comment: "Felmondás"},
  {username: "Gulyas Matyas",	time: "00:00:00", comment: "Kirúgás"},
  {username: "Kovacs Laszlo",	time: "00:00:00", comment: "Szabadság"},
  {username: "Kennedy John",	time: "04:21:08", comment: "1. Warn"},
  {username: "Taylor Smith",	time: "10:36:04", comment: "-"},
  {username: "James Willson",	time: "05:00:18", comment: "Szabadság"},
  {username: "Nagy Istvan",	time: "00:00:00", comment: "Felmondás"},
  {username: "Williams Clark",	time: "38:31:02", comment: "Kirúgás"},
  {username: "Oszwald Zoltán",	time: "09:20:11", comment: "Felmondás"},
  {username: "Steve Jenkins",	time: "00:00:00", comment: "Kirúgás - Feketelista"},
  {username: "Randa Alex",	time: "00:00:00", comment: "2. Warn"},
  {username: "Benedik Hawthorne",	time: "06:33:14", comment: "Ciklusbelépő"},
  {username: "Oszwald Edmund",	time: "04:24:09", comment: "Kirúgás - Feketelista"},
  {username: "Aryan Abdallah",	time: "73:49:23", comment: "Prémium I."},
  {username: "Richard Wilson",	time: "04:34:58", comment: "1. Warn"},
  {username: "Kovács Alexander",	time: "19:45:06", comment: "Felmondás"},
  {username: "Knight Nicole",	time: "00:00:00", comment: "Felmondás"}
]

const dutyData12 = [
  {username: "Latorre Santiago",      time: "00:00:00",        comment: "Szabadság"},
  {username: "Jack Noa",	            time: "15:40:09",        comment: "-"},
  {username: "Matt Trucker",	        time: "15:26:47",        comment: "-"},
  {username: "Wilhelm Kitty",	        time: "24:42:02",        comment: "Felmondás"},
  {username: "Lucifer Morningstar",	  time: "00:42:49",        comment: "Ciklusbelépő"},
  {username: "Kovacs Laszlo",	        time: "00:00:00",        comment: "Kirúgás"},
  {username: "Wyatt Anderson",        time: "66:44:29",        comment: "Prémium I."},
  {username: "Smith Tyler",	          time: "01:42:51",        comment: "Felmondás"},
  {username: "Kennedy John",	        time: "26:17:30",        comment: "Felmondás"},
  {username: "Taylor Smith",	        time: "66:31:17",        comment: "Prémium II."},
  {username: "James Willson",	        time: "12:42:02",        comment: "-"},
  {username: "Randa Alex",            time: "00:00:00",        comment: "Kirúgás"},
  {username: "Benedik Hawthorne",	    time: "06:02:00",        comment: "Szabadság"},
  {username: "Aryan Abdallah",        time: "60:12:31",        comment: "Prémium III."},
  {username: "Carlo Smith",           time: "60:01:21",        comment: "Prémium IV."},
  {username: "Richard Wilson",	      time: "18:18:09",        comment: "-"}
  ]

  const dutyData13 = [
    {username: "Latorre Santiago",	        time:"00:00:00",        comment: "Szabadság"},
    {username: "Jack Noa",	                time:"00:00:00",        comment: "Kirúgás"},
    {username: "Matt Trucker",	            time:"56:22:01",        comment: "Prémium II."},
    {username: "Lucifer Morningstar",	    time:"00:00:00",        comment: "1. Warn"},
    {username: "Wyatt Anderson",	        time:"34:05:24",        comment: "-"   },
    {username: "Taylor Smith",	            time:"26:44:51",        comment: "-"},
    {username: "James Willson",	            time:"09:24:14",        comment: "Szabadság"},
    {username: "Donne Kinga",	            time:"13:17:08",        comment: "-"},
    {username: "Benedik Hawthorne",	        time:"00:01:00",        comment: "Kirúgás"},
    {username: "Don Fillipo",	            time:"12:26:27",        comment: "-"},
    {username: "Aryan Abdallah",	        time:"35:16:42",        comment: "Prémium III." },
    {username: "Carlo Smith",	            time:"58:55:24",        comment: "Prémium I."},
    {username: "Richard Wilson",	        time:"10:16:59",        comment: "-" }
    ]

    const dutyData14 = [
      {username: "Latorre Santiago",      time: "00:00:00",        comment: "Szabadság"}, 
      {username: "Redd Jack",             time: "62:29:31",        comment: "Prémium I."},
      {username: "Miller Lilien",         time: "06:51:07",        comment: "Ciklusbelépő"},
      {username: "Matt Trucker",          time: "24:03:24",        comment: "Felmondás"},
      {username: "Michael Dönci",         time: "17:48:21",        comment: "-"},
      {username: "Lucifer Morningstar",   time: "00:00:00",        comment: "2. Warn"},
      {username: "Wyatt Anderson",        time: "08:12:49",        comment: "Felmondás"}, 
      {username: "Taylor Smith",          time: "10:17:21",        comment: "-"},
      {username: "James Willson",         time: "06:19:33",        comment: "Felmondás"},
      {username: "Harry Maguire",         time: "08:02:11",        comment: "Ciklusbelépő"},
      {username: "Luigi DiTutti",         time: "01:16:29",        comment: "Ciklusbelépő"},
      {username: "Donne Kinga",           time: "11:55:30",        comment: "-"},
      {username: "Key Abby",              time: "14:23:44",        comment: "-"},
      {username: "Don Fillipo",           time: "13:13:54",        comment: "-"},
      {username: "Tupac Shakur",          time: "43:14:03",        comment: "Prémium II."},
      {username: "Carlo Smith",           time: "26:53:11",        comment: "-"},
      {username: "Matheo Beni",           time: "30:10:30",        comment: "-"},
      {username: "Rage Karter",           time: "34:22:19",        comment: "Prémium III."},
      {username: "Richard Wilson",        time: "00:00:00",        comment: "1. Warn"},
      {username: "Joe Hudson",            time: "-",               comment: "Regisztráció hiánya"},
      {username: "Noah Diego",            time: "-",               comment: "Regisztráció hiánya"},
      {username: "Lewis Dave",            time: "-",               comment: "Regisztráció hiánya"},
      {username: "Weston Jamie",          time: "-",               comment: "Regisztráció hiánya"},
      {username: "Human Lajos",           time: "-",               comment: "Regisztráció hiánya"}
      ]
      
      
const dutyData15 = [
  {username: "Latorre Santiago",	        time: "00:00:00",            comment: "1. Warn"},
  {username: "Redd Jack",	                time: "28:52:19",            comment: "-"},
  {username: "Noah Diego",	            time: "56:36:06",            comment: "Prémium I."},
  {username: "Miller Lilien",	            time: "26:52:39",            comment: "-"}, 
  {username: "Michael Dönci",	            time: "03:35:48",            comment: "Felmondás"},
  {username: "Lucifer Morningstar",	    time: "00:00:00",            comment: "3. Warn - Kirúgás"},
  {username: "Taylor Smith",	            time: "36:01:50",            comment: "Prémium IV."},
  {username: "Weston Jamie",	            time: "08:43:12",            comment: "2. Warn"},
  {username: "Tarka kalu",	            time: "00:00:05",            comment: "Ciklusbelépő"},
  {username: "Alonzo DiTutti",	        time: "17:17:30",            comment: "-"},
  {username: "Harry Maguire",	            time: "01:03:12",            comment: "Felmondás"}, 
  {username: "Lenox Dave",	            time: "01:40:21",            comment: "Ciklusbelépő"},
  {username: "Kiss Pista",	            time: "30:53:24",            comment: "Prémium V."},
  {username: "Luigi DiTutti",	            time: "15:08:39",            comment: "-"},
  {username: "Donne Kinga",	            time: "02:52:41",            comment: "Szabadság"}, 
  {username: "Key Abby",	                time: "03:54:55",            comment: "1. Warn"},
  {username: "Don Fillipo",               time: "11:15:23",            comment: "-"}, 
  {username: "Tupac Shakur",	            time: "37:00:48",            comment: "Prémium III."},
  {username: "Carlo Smith",	            time: "49:57:02",            comment: "Prémium II."},
  {username: "Matheo Beni",	            time: "26:09:22",            comment: "-"},
  {username: "Rage Karter",	            time: "22:56:17",            comment: "-"},
  {username: "Richard Wilson",	        time: "00:00:00",            comment: "2. Warn"},
  {username: "Tyrone Brown",	            time: "27:42:23",            comment: "-"}
  ]
  
  const dutyData16 = [
  {username: "Latorre Santiago",	    time: "00:00:00",            comment: "2. Warn"},
  {username: "Redd Jack",	            time: "41:54:03",            comment: "Prémium IV."},
  {username: "Noah Diego",	        time: "47:56:54",            comment: "Felmondás"},
  {username: "Miller Lilien",	        time: "32:23:21",            comment: "Prémium V."},
  {username: "Danrous Draven",	    time: "20:17:41",            comment: "-"},
  {username: "John Shelby",	        time: "02:49:44",            comment: "Ciklusbelépő"},
  {username: "Taylor Smith",	        time: "64:49:33",            comment: "Felmondás"},
  {username: "Weston Jamie",	        time: "12:27:08",            comment: "-"},
  {username: "Tarka kalu",	        time: "04:25:11",            comment: "1. Warn"},
  {username: "Brooks Trevon",	        time: "05:42:37",            comment: "Ciklusbelépő"},
  {username: "Alonzo DiTutti",	    time: "04:59:48",            comment: "Felmondás"},
  {username: "Lenox Dave",	        time: "00:00:00",            comment: "Felmondás"},
  {username: "Kiss Pista",	        time: "59:38:01",            comment: "Prémium I."},            
  {username: "Luigi DiTutti",	        time: "00:11:26",            comment: "Felmondás"},
  {username: "Donne Kinga",	        time: "18:27:51",            comment: "-"},
  {username: "Key Abby",	            time: "00:00:00",            comment: "Felmondás"},
  {username: "Don Fillipo",	        time: "43:21:09",            comment: "Prémium II."},
  {username: "Tupac Shakur",	        time: "42:03:45",            comment: "Prémium III."},
  {username: "Carlo Smith",	        time: "08:28:28",            comment: "Felmondás"},
  {username: "Matheo Beni",	        time: "16:53:27",            comment: "-"},
  {username: "Rage Karter",	        time: "17:14:02",            comment: "-"},
  {username: "Richard Wilson",	    time: "00:00:00",            comment: "3. Warn - Kirúgás"},
  {username: "Tyrone Brown",	        time: "15:17:13",            comment: "Felmondás"}
  ]
  
  const dutyData17 = [
  {username: "Latorre Santiago",	    time: "00:00:00",        comment: "3. Warn - Kirúgás"},
  {username: "Redd Jack",	            time: "00:00:00",        comment: "Felmondás"},
  {username: "Miller Lilien",	        time: "34:42:47",        comment: "Prémium IV."},
  {username: "Danrous Draven",	    time: "06:06:37",        comment: "1. Warn"},
  {username: "John Davis",	        time: "14:29:54",        comment: "-"},
  {username: "John Shelby",	        time: "30:42:03",        comment: "Felmondás"},
  {username: "Weston Jamie",	        time: "01:37:07",        comment: "Felmondás"},
  {username: "Zsoltár Fjurka",	    time: "10:26:32",        comment: "-"},
  {username: "Tarka kalu",	        time: "01:19:05",        comment: "2. Warn"},
  {username: "Brooks Trevon",	        time: "05:35:22",        comment: "1. Warn"},
  {username: "Kiss Pista",	        time: "15:03:00",        comment: "Felmondás"},
  {username: "Donne Kinga",	        time: "11:55:58",        comment: "-"},
  {username: "Redd Jacob",	        time: "02:07:51",        comment: "Felmondás"},
  {username: "Kiss Peter",	        time: "88:50:24",        comment: "Prémium I."},
  {username: "Don Fillipo",	        time: "15:18:11",        comment: "-"},
  {username: "Tupac Shakur",	        time: "66:17:51",        comment: "Prémium II."},
  {username: "Matheo Beni",	        time: "35:00:30",        comment: "Prémium III."},
  {username: "Rage Karter",	        time: "15:31:48",        comment: "Prémium V."},
  {username: "Aiden Jackson",         time: "-",               comment: "Regisztráció hiánya"},
  {username: "Isaac_Foster",	        time: "09:13:07",        comment: "Adatkitöltés hiánya"}
  ]
  
  const dutyData18 = [
  {username: "Sepsiszent György",	        time: "03:00:34",            comment: "Ciklusbelépő"},
  {username: "Miller Lilien",	            time: "00:00:11",            comment: "Vezérkarba került"},
  {username: "Danrous Draven",	        time: "57:51:41",            comment: "Prémium IV."},
  {username: "Aiden JAckson",	            time: "16:46:54",            comment: "-"},
  {username: "John Davis",	            time: "03:18:59",            comment: "Szabadság"},
  {username: "Zsoltár Fjurka",	        time: "18:44:47",            comment: "-"},
  {username: "Kyle Adam",	                time: "35:02:00",            comment: "-"},
  {username: "Tarka kalu",	            time: "00:58:00",            comment: "3. Warn - Kirúgás"},
  {username: "Brooks Trevon",	            time: "53:57:00",            comment: "Prémium V."},
  {username: "Thomas Wick",	            time: "17:29:21",            comment: "-"},
  {username: "Meti Chever",	            time: "02:59:42",            comment: "Ciklusbelépő"},
  {username: "Jack Hunter",	            time: "10:20:45",            comment: "-"},
  {username: "Johnson Murphy",	        time: "00:46:38",            comment: "Ciklusbelépő"},
  {username: "Jack Miller",	            time: "73:25:28",            comment: "Prémium I."},
  {username: "Isaac_Foster",	            time: "33:20:33",            comment: "-"},
  {username: "Donne Kinga",	            time: "20:49:23",            comment: "-"},
  {username: "Benjamin Kyle",	            time: "04:19:32",            comment: "Ciklusbelépő"},
  {username: "Alessandro Damiano",	    time: "03:34:35",            comment: "Ciklusbelépő"},
  {username: "Kiss Peter",	            time: "23:18:05",            comment: "Kirúgás"},
  {username: "Don Fillipo",	            time: "00:27:28",            comment: "Vezérkarba került"},
  {username: "Balogh Tetris",	            time: "00:49:55",            comment: "Ciklusbelépő"},
  {username: "Tupac Shakur",	            time: "73:18:43",            comment: "Prémium II."},
  {username: "John Toretto",	            time: "06:31:41",            comment: "Ciklusbelépő"},
  {username: "Matheo Beni",	            time: "72:01:50",            comment: "Prémium III."},
  {username: "Salvatore Stefan",	        time: "04:12:26",            comment: "Ciklusbelépő"},
  {username: "Rage Karter",	            time: "00:00:03",            comment: "Vezérkarba került"},
  {username: "Della Rocco",	            time: "51:26:11",            comment: "Prémium VI."},
  {username: "Gordon Krisztian",	        time: "02:00:46",            comment: "1. Warn"},
  {username: "Joseph Hawke",              time: "-",                   comment: "Regisztráció hiánya"}
  ]
  const dutyData19 = [
    {username: "Agim Hoxha",	        time: "00:00:00",        comment: "Ciklusbelépő"},
    {username: "Sepsiszent György",	  time: "08:01:16",        comment: "Felmondás"},
    {username: "Danrous Draven",	    time: "07:43:19",        comment: "-"},
    {username: "Aiden JAckson",	      time: "12:52:47",        comment: "-"},
    {username: "John Davis",	        time: "01:15:12",        comment: "-"},
    {username: "Zsoltár Fjurka",	    time: "00:00:00",        comment: "-"},
    {username: "Rage Karter",	        time: "00:00:00",        comment: "-"},
    {username: "Kyle Adam",	          time: "09:44:03",        comment: "-"},
    {username: "Brooks Trevon",	      time: "02:46:14",        comment: "-"},
    {username: "Thomas Wick",	        time: "00:28:29",        comment: "Felmondás"},
    {username: "Meti Chever",	        time: "00:00:00",        comment: "-"},
    {username: "Nagy Rebecca",	      time: "10:32:14",        comment: "-"},
    {username: "Jack Hunter",	        time: "13:13:32",        comment: "-"},
    {username: "Johnson Murphy",	    time: "08:39:20",        comment: "-"},
    {username: "Jack Miller",	        time: "26:05:29",        comment: "-"},
    {username: "Isaac_Foster",	      time: "34:18:11",        comment: "-"},
    {username: "Donne Kinga",	        time: "15:51:50",        comment: "-"},   
    {username: "Benjamin Kyle",	      time: "10:24:20",        comment: "-"},
    {username: "Alessandro Damiano",	time: "17:53:26",        comment: "-"},   
    {username: "Balogh Tetris",	      time: "05:02:57",        comment: "Felmondás"},
    {username: "Tupac Shakur",	      time: "67:00:24",        comment: "Felmondás"},
    {username: "John Toretto",	      time: "09:10:17",        comment: "-"},
    {username: "Matheo Beni",	        time: "64:38:52",        comment: "Felmondás"},
    {username: "Salvatore Stefan",	  time: "12:01:11",        comment: "-"},
    {username: "Della Rocco",	        time: "36:16:11",        comment: "-"},
    {username: "Gordon Krisztian",	  time: "00:00:00",        comment: "-"}
    ]
    
    const dutyData20 = [
    {username: "Agim Hoxha",	        time: "00:00:00",         comment: "1. Warn"},
    {username: "Gize Gabor",	        time: "05:00:37",         comment: "Ciklusbelépő"},
    {username: "John Walker",	        time: "03:13:20",         comment: "Ciklusbelépő"},
    {username: "Danrous Draven",	    time: "00:00:00",         comment: "1. Warn"},
    {username: "Aiden JAckson",	      time: "00:00:00",         comment: "Felmondás"},
    {username: "John Reed",	          time: "43:37:33",         comment: "Prémium I."},
    {username: "Lakatos Judas",	      time: "02:22:37",         comment: "Ciklusbelépő"},
    {username: "Nagy Dani",	          time: "04:18:26",         comment: "Ciklusbelépő"},
    {username: "John Davis",	        time: "05:56:51",         comment: "Felmondás"},
    {username: "Zsoltár Fjurka",	    time: "00:00:00",         comment: "Felmondás"},
    {username: "Kyle Adam",	          time: "00:00:00",         comment: "1. Warn"},
    {username: "Brooks Trevon",	      time: "00:00:00",         comment: "1. Warn"},
    {username: "Meti Chever",	        time: "00:00:00",         comment: "1. Warn"},
    {username: "Nagy Rebecca",	      time: "14:23:57",         comment: "-"},
    {username: "Jack Hunter",	        time: "03:22:38",         comment: "Felmondás"},
    {username: "Johnson Murphy",	    time: "00:00:00",         comment: "1. Warn"},
    {username: "Samuel Imre",	        time: "06:06:14",         comment: "Ciklusbelépő"},
    {username: "Jack Miller",         time: "00:00:00",         comment: "Felmondás"},
    {username: "Isaac_Foster",	      time: "02:58:00",         comment: "Felmondás"},
    {username: "Donne Kinga",	        time: "08:20:39",         comment: "1. Warn"},
    {username: "Benjamin Kyle",	      time: "00:00:00",         comment: "1. Warn"},
    {username: "Alessandro Damiano",	time: "00:00:00",         comment: "1. Warn"},
    {username: "John Toretto",	      time: "03:01:31",         comment: "Szabadság"},
    {username: "Salvatore Stefan",	  time: "00:00:00",         comment: "1. Warn"},
    {username: "Della Rocco",	        time: "60:30:04",         comment: "Vezérkarba került"},
    {username: "Ferdmann Nico",       time: "-",                comment: "Regisztráció hiánya"},
    {username: "Ferdmann Scott",      time: "-",                comment: "Regisztráció hiánya"},
    {username: "Jhonathan Smith",     time: "-",                comment: "Regisztráció hiánya"},
    {username: "Joseph Hawke",        time: "-",                comment: "Regisztráció hiánya"}
    ]
    const dutyData21 = [
    {username: "Gize Gabor",	            time: "28:38:24",        comment: "Prémium VI."},
    {username: "Lopos Koro",	            time: "18:07:55",        comment: "-"},
    {username: "Smith Tyler",	            time: "30:05:08",        comment: "Prémium V."},
    {username: "John Reed",	              time: "98:12:09",        comment: "Prémium I."},
    {username: "Lakatos Bajnok",	        time: "49:38:19",        comment: "Prémium II."},
    {username: "William David",	          time: "43:12:30",        comment: "Prémium III."},
    {username: "Mekk Elek",	              time: "36:46:19",        comment: "Prémium IV."},
    {username: "Nagy Dani",	              time: "13:40:16",        comment: "-"},
    {username: "Biro Bertalan",	          time: "10:19:07",        comment: "-"},
    {username: "Kyle Adam",	              time: "00:00:00",        comment: "2. Warn"},
    {username: "Nagy Rebecca",	          time: "12:46:48",        comment: "-"},
    {username: "Samuel Imre",	            time: "13:08:23",        comment: "-"},
    {username: "Herceg Robi",	            time: "13:07:07",        comment: "-"},
    {username: "Alessandro Damiano",	    time: "00:00:00",        comment: "2. Warn"},
    {username: "Lakatos Hulio",	          time: "04:49:42",        comment: "Ciklusbelépő"},
    {username: "Lopos Rikardo",           time: "01:20:24",        comment: "Ciklusbelépő"},
    {username: "John Walker",	            time: "02:13:33",        comment: "Szabadság"},
    {username: "Istenes Bertalan",	      time: "02:39:07",        comment: "Szabadság /határeset/"},
    {username: "Lakatos Judas",	          time: "00:00:00",        comment: "Szabadság"},
    {username: "Donne Kinga",	            time: "00:39:44",        comment: "Szabadság"},
    {username: "Gordon Krisztian",	      time: "00:00:00",        comment: "-"},
    {username: "Jhonathan Smith",	        time: "00:00:00",        comment: "Szabadság"},
    {username: "John Toretto",	          time: "05:56:23",        comment: "Szabadság"},
    {username: "Dexter William Stolas",	  time: "06:53:03",        comment: "Szabadság"},
    {username: "Salvatore Stefan",	      time: "00:00:00",        comment: "Felmondás"},
    {username: "Brooks Trevon",	          time: "00:00:00",        comment: "Felmondás"}, 
    {username: "Lakatos Luige",	          time: "22:19:05",        comment: "Felmondás"}, 
    {username: "Joseph Hawke",	          time: "00:00:00",        comment: "Felmondás"}, 
    {username: "Meti Chever",	            time: "00:00:00",        comment: "Felmondás"}, 
    {username: "Magzatus Deletus",	      time: "19:34:02",        comment: "Felmondás"}, 
    {username: "Benjamin Kyle",	          time: "00:00:00",        comment: "Felmondás"}, 
    {username: "Thomas Wick",	            time: "03:01:21",        comment: "Felmondás"}, 
    {username: "Johnson Murphy",	        time: "00:00:00",        comment: "Felmondás"}, 
    {username: "Agim Hoxha",	            time: "00:00:00",        comment: "Felmondás"},
    {username: "Lakatos Robert",	        time: "27:55:10",        comment: "Felmondás"}, 
    {username: "Danrous Draven",	        time: "00:00:00",        comment: "Felmondás"}, 
    {username: "Ferdmann Scott",          time: "-",               comment: "Kirúgás"}
    ]
    const dutyData22 = [
    {username: "Kolompar Vinetu",	        time: "01:44:09",        comment: "Ciklusbelépő"}, 
    {username: "John Michael",	          time: "00:00:00",        comment: "Ciklusbelépő"}, 
    {username: "Jakob Zoli",	            time: "03:02:08",        comment: "Ciklusbelépő"}, 
    {username: "Nagy Peti",	              time: "02:38:00",        comment: "Ciklusbelépő"}, 
    {username: "Gerald Sean",	            time: "00:03:31",        comment: "Ciklusbelépő"}, 
    {username: "Szalai Péter",	          time: "00:23:25",        comment: "Ciklusbelépő"}, 
    {username: "Ronan Lynch",	            time: "01:48:45",        comment: "Ciklusbelépő"}, 
    {username: "Jondo Kecsk",	            time: "04:37:32",        comment: "Ciklusbelépő"}, 
    {username: "Tökös Richy",	            time: "04:01:02",        comment: "Ciklusbelépő"}, 
    {username: "Donne Kinga",	            time: "04:16:58",        comment: "Szabadság"}, 
    {username: "John Reed",	              time: "86:03:57",        comment: "Vezérkarba került"}, 
    {username: "Lakatos Bajnok",	        time: "94:56:41",        comment: "Prémium I."}, 
    {username: "William David",	          time: "62:40:33",        comment: "Prémium II."}, 
    {username: "Lopos Koro",	            time: "37:04:04",        comment: "Prémium III."}, 
    {username: "Herceg Robi",	            time: "34:04:02",        comment: "Prémium IV."}, 
    {username: "Mekk Elek",	              time: "30:38:34",        comment: "Prémium V."}, 
    {username: "Lakatos Hulio",	          time: "18:56:48",        comment: "-"}, 
    {username: "John Toretto",	          time: "10:10:57",        comment: "-"}, 
    {username: "Nagy Rebecca",	          time: "13:13:33",        comment: "-"}, 
    {username: "Daniel James",	          time: "19:11:15",        comment: "-"}, 
    {username: "Fazekas Beszidll",	      time: "43:37:47",        comment: "Felmondás"},  
    {username: "Gize Gabor",	            time: "00:00:00",        comment: "Felmondás"}, 
    {username: "Gordon Krisztian",	      time: "00:00:00",        comment: "Felmondás"},  
    {username: "John Walker",	            time: "00:00:00",        comment: "Felmondás"},  
    {username: "Istenes Bertalan",	      time: "00:00:00",        comment: "Felmondás"}, 
    {username: "Nagy Dani",	              time: "00:00:00",        comment: "Felmondás"},  
    {username: "Joseph Hawke",	          time: "00:00:00",        comment: "Felmondás"},  
    {username: "Jhonathan Smith",	        time: "00:00:00",        comment: "1. Warn"}, 
    {username: "Samuel Imre",	            time: "00:29:56",        comment: "1. Warn"}, 
    {username: "Lopos Rikardo",	          time: "00:00:00",        comment: "1. Warn"}, 
    {username: "Biro Bertalan",	          time: "00:00:00",        comment: "1. Warn"}, 
    {username: "Lakatos Judas",	          time: "00:00:00",        comment: "1. Warn"}, 
    {username: "Dexter William Stolas",	  time: "00:47:49",        comment: "1. Warn"}, 
    {username: "Smith Tyler",	            time: "00:00:00",        comment: "1. Warn"}, 
    {username: "Kyle Adam",	              time: "00:00:00",        comment: "Kirúgás - 3. Warn"},  
    {username: "Alessandro Damiano",	    time: "00:00:00",        comment: "Kirúgás - 3. Warn"} 
    ]

    const dutyData23 = [
      {username: "William David",	         time: "93:44:01",        comment: "Prémium I. /Megvonva/"},
      {username: "Ronan Lynch",	           time: "73:38:11",        comment: "Prémium I."},
      {username: "Mekk Elek",	             time: "52:54:23",        comment: "Prémium II."},
      {username: "Nagy Peti",	             time: "49:56:32",        comment: "Prémium III."},
      {username: "Kolompar Vinetu",	       time: "33:23:52",        comment: "Prémium IV."},
      {username: "Tsing Steven",	         time: "30:56:12",        comment: "Prémium V."},
      {username: "Herceg Robi",	           time: "30:13:19",        comment: "Prémium VI."},
      {username: "John Karter",	           time: "23:41:49",        comment: "-"},
      {username: "Lopos Koro",	           time: "22:37:00",        comment: "-"},
      {username: "Smith Christian",	       time: "26:19:10",        comment: "-"},
      {username: "Connor Gibbson",	       time: "07:40:48",        comment: "-"},
      {username: "Beater Krisz",	         time: "23:54:42",        comment: "-"},
      {username: "Nagy Rebecca",	         time: "13:06:48",        comment: "-"},
      {username: "Lakatos Bajnok",	       time: "26:51:22",        comment: "-"},
      {username: "Lakatos Hulio",	         time: "12:45:20",        comment: "-"},
      {username: "Taylor David",	         time: "20:16:06",        comment: "-"},
      {username: "Taylor Black",	         time: "00:00:00",        comment: "Ciklusbelépő"},
      {username: "Donne Kinga",	           time: "00:00:00",        comment: "Szabadság"},
      {username: "Jondo Kecsk",	           time: "00:41:43",        comment: "Szabadság"},
      {username: "John Toretto",	         time: "01:31:34",        comment: "1. Warn"},
      {username: "Tökös Richy",	           time: "00:00:00",        comment: "1. Warn"},
      {username: "Samuel Imre",	           time: "00:00:00",        comment: "2. Warn"},
      {username: "Jhonathan Smith",	       time: "00:00:00",        comment: "Inaktivitás - Kirúgás"},
      {username: "Lakatos Judas",	         time: "00:00:00",        comment: "Inaktivitás - Kirúgás"},   
      {username: "Biro Bertalan",	         time: "00:00:00",        comment: "Inaktivitás - Kirúgás"},   
      {username: "Dexter William Stolas",	 time: "00:00:00",        comment: "Inaktivitás - Kirúgás"},   
      {username: "Smith Tyler",	           time: "00:00:00",        comment: "Inaktivitás - Kirúgás"},   
      {username: "Lopos Rikardo",	         time: "00:00:00",        comment: "Inaktivitás - Kirúgás"},   
      {username: "Jakob Zoli",	           time: "05:06:16",        comment: "Kirúgás"}, 
      {username: "Szalai Péter",	         time: "00:00:00",        comment: "Kirúgás"}, 
      {username: "Elka Lapal",	           time: "27:49:42",        comment: "Felmondás"},       
      {username: "John Michael",	         time: "05:39:59",        comment: "Felmondás"},       
      {username: "Daniel James",	         time: "09:50:50",        comment: "Felmondás"},       
      {username: "Temesi Ottó",	           time: "19:10:53",        comment: "Felmondás"}, 
      {username: "Gerald Sean",	           time: "00:00:00",        comment: "Felmondás"}       
      ]
      const dutyData24 = [
        {username: "Ronan Lynch",	            time: "66:58:34",        comment: "Prémium I."},
        {username: "Tsing Steven",	          time: "58:29:35",        comment: "Prémium II."},
        {username: "Mekk Elek",	              time: "46:31:05",        comment: "Prémium III."},
        {username: "Herceg Robi",	            time: "45:50:38",        comment: "Prémium IV."},
        {username: "Nagy Peti",	              time: "45:16:00",        comment: "Prémium V."},
        {username: "William David",	          time: "33:15:19",        comment: "Prémium VI."},
        {username: "Diego Martinez",	        time: "33:12:16",        comment: "Prémium VII."},
        {username: "Szabo Kristof",	          time: "33:04:32",        comment: "Prémium VIII."},
        {username: "John Karter",	            time: "21:47:41",        comment: "-"},
        {username: "Lopos Koro",	            time: "27:24:53",        comment: "-"},
        {username: "Smith Christian",	        time: "27:02:48",        comment: "-"},
        {username: "Beater Krisz",	          time: "14:32:01",        comment: "-"},
        {username: "George Michael",	        time: "12:23:20",        comment: "-"},
        {username: "Kolompar Vinetu",	        time: "18:10:23",        comment: "-"},
        {username: "Lakatos Hulio",	          time: "14:40:43",        comment: "-"},
        {username: "Taylor David",	          time: "28:17:50",        comment: "-"},
        {username: "Jondo Kecsk",	            time: "00:00:00",        comment: "Szabadság"},
        {username: "Connor Gibbson",	        time: "00:22:22",        comment: "Szabadság"},
        {username: "Oswald Istvan",	          time: "02:32:27",        comment: "Ciklusbelépő"},
        {username: "Kakszi Jeno",	            time: "02:23:18",        comment: "Ciklusbelépő"},
        {username: "Faresz Abdullah",	        time: "05:29:29",        comment: "Ciklusbelépő"},
        {username: "Smith jhon",	            time: "03:25:19",        comment: "Ciklusbelépő"},
        {username: "David James",	            time: "02:08:27",        comment: "Ciklusbelépő"},
        {username: "Tökös Richy",	            time: "00:00:00",        comment: "Inaktivitás - Kirúgás"},   
        {username: "John Toretto",	          time: "00:00:00",        comment: "Felmondás"},               
        {username: "Lakatos Bajnok",	        time: "00:00:00",        comment: "Felmondás"},               
        {username: "Donne Kinga",	            time: "00:00:00",        comment: "Felmondás"},               
        {username: "Samuel Imre",	            time: "00:00:00",        comment: "Felmondás"},               
        {username: "Taylor Black",	          time: "00:00:00",        comment: "Felmondás"},               
        {username: "Nagy Rebecca",	          time: "25:24:56",        comment: "Felmondás"}               
        ]
        
        const dutyData25 = [
        {username: "Ivy Black",	          time: "10:35:17",        comment: "-"}, 
        {username: "Alexander Gibson",	  time: "10:39:36",        comment: "-"},  
        {username: "Mekk Elek",	          time: "22:45:56",        comment: "-"}, 
        {username: "James Willson",	      time: "35:21:09",        comment: "Prémium I."}, 
        {username: "Nagy Peti",	          time: "29:26:01",        comment: "Prémium II."}, 
        {username: "Szalok Phill",	      time: "28:37:23",        comment: "Prémium III."}, 
        {username: "Menyus Menziesh",	    time: "01:43:06",        comment: "Ciklusbelépő"}, 
        {username: "Verő Gyuri",	        time: "02:27:09",        comment: "Ciklusbelépő"},  
        {username: "Sonkas ocsi",	        time: "04:39:08",        comment: "Ciklusbelépő"}, 
        {username: "Lakatos Leonidász",	  time: "04:08:24",        comment: "Ciklusbelépő"}, 
        {username: "George Michael",	    time: "19:41:51",        comment: "Vezérkarba került"},        
        {username: "Herceg Robi",	        time: "25:33:53",        comment: "Vezérkarba került"},        
        {username: "David James",	        time: "00:00:00",        comment: "1. Warn"}, 
        {username: "Oswald Istvan",	      time: "00:00:00",        comment: "1. Warn"}, 
        {username: "Jondo Kecsk",	        time: "00:00:00",        comment: "?"}, 
        {username: "Smith jhon",	        time: "00:00:00",        comment: "Szabadság"}, 
        {username: "Faresz Abdullah",	    time: "01:29:36",        comment: "Szabadság"}, 
        {username: "Szabo Kristof",	      time: "03:14:17",        comment: "Szabadság"}, 
        {username: "Taylor David",	      time: "06:01:29",        comment: "Felmondás"},        
        {username: "Kolompar Vinetu",	    time: "00:00:00",        comment: "Felmondás"},        
        {username: "Lakatos Hulio",	      time: "01:34:48",        comment: "Felmondás"},        
        {username: "Kakszi Jeno",	        time: "00:00:00",        comment: "Felmondás"},        
        {username: "Ronan Lynch",	        time: "00:00:00",        comment: "Felmondás"},        
        {username: "Tsing Steven",	      time: "17:40:40",        comment: "Felmondás"},        
        {username: "Kuznyecov Armin",	    time: "01:03:13",        comment: "Felmondás"},        
        {username: "Diego Martinez",	    time: "15:10:57",        comment: "Felmondás"},        
        {username: "Lakatos Bajnok",	    time: "00:42:00",        comment: "Felmondás"},        
        {username: "Beater Krisz",	      time: "03:51:39",        comment: "Felmondás"},        
        {username: "William David",	      time: "15:49:37",        comment: "Felmondás"},        
        {username: "Connor Gibbson",	    time: "00:00:00",        comment: "Felmondás"},        
        {username: "Lopos Koro",	        time: "25:22:36",        comment: "Felmondás"},        
        {username: "Smith Christian",	    time: "25:40:43",        comment: "Felmondás"},        
        {username: "John Karter",	        time: "00:00:00",        comment: "Felmondás"}        
        ]
        
        const dutyData26 = [
        {username: "Nagy Peti",	              time: "60:05:08",         comment: "Prémium I."},
        {username: "Verő Gyuri",	            time: "53:27:00",         comment: "Prémium II."},
        {username: "Mekk Elek",   	          time: "51:21:00",         comment: "Prémium III."},
        {username: "Szabo Kristof",	          time: "40:00:23",         comment: "Prémium IV."},
        {username: "James Willson",	          time: "38:44:34",         comment: "Prémium V."},
        {username: "West Jacob",	            time: "32:47:34",         comment: "Prémium VI."},
        {username: "Tompa Jackson",	          time: "14:55:41",         comment: "-"},
        {username: "Roberto Phillips",	      time: "10:03:00",         comment: "-"},
        {username: "Lakatos Leonidász",	      time: "15:07:50",         comment: "-"},
        {username: "Don Paco",    	          time: "16:38:26",         comment: "-"},
        {username: "Kazinczy martin",	        time: "23:06:13",         comment: "-"},
        {username: "Ricardo D White",	        time: "17:46:27",         comment: "-"},
        {username: "David James",	            time: "00:00:00",         comment: "Szabadság"},
        {username: "Alex White",	            time: "00:41:06",         comment: "Ciklusbelépő"},
        {username: "Veres Feri",	            time: "02:21:53",         comment: "Ciklusbelépő"},
        {username: "Smith jhon",	            time: "00:00:00",         comment: "1. Warn"},
        {username: "Oswald Istvan",	          time: "00:00:00",         comment: "2. Warn"},
        {username: "Zoltan Nemeth",	          time: "13:13:05",         comment: "Felmondás"},       
        {username: "Jondo Kecsk",	            time: "00:00:00",         comment: "Felmondás"},       
        {username: "Faresz Abdullah",	        time: "00:19:18",         comment: "Felmondás"},       
        {username: "Szalok Phill",	          time: "52:26:33",         comment: "Felmondás"},       
        {username: "Lucskos Armando",	        time: "12:37:18",         comment: "Felmondás"},       
        {username: "Menyus Menziesh",	        time: "55:24:20",         comment: "Felmondás"},       
        {username: "Emilio Santorini",	      time: "41:02:09",         comment: "Felmondás"},       
        {username: "Smith Tyler",	            time: "00:54:08",         comment: "Felmondás"},       
        {username: "Ivy Black",	              time: "01:52:29",         comment: "Felmondás"},       
        {username: "Sonkas ocsi",	            time: "61:03:15",         comment: "Felmondás"},       
        {username: "Alexander Gibson",	      time: "00:00:00",         comment: "Felmondás"},       
        {username: "Dunai Dávid",	            time: "14:12:50",         comment: "Felmondás"},       
        {username: "Herceg Robi",	            time: "00:00:00",         comment: "Felmondás"},       
        {username: "Antonio Conte",	          time: "15:57:03",         comment: "Felmondás"},       
        {username: "Taylor David",	          time: "24:00:22",         comment: "Kirúgás"},       
        {username: "John Karter",	            time: "22:40:29",         comment: "Kirúgás"}       
        ]
        
        const dutyData27 = [
        {username: "Mekk Elek",           time: "52:14:39",        comment: "Prémium I."},
        {username: "James Willson",	      time: "48:11:11",        comment: "Prémium II."},
        {username: "Verő Gyuri",	        time: "35:02:34",        comment: "Prémium III."},
        {username: "Nagy Peti",	          time: "32:00:32",        comment: "Prémium IV."},
        {username: "Ricardo D White",	    time: "25:41:00",        comment: "Prémium V."},
        {username: "Tompa Jackson",	      time: "17:18:05",        comment: "-"},
        {username: "Kazinczy martin",	    time: "22:35:03",        comment: "-"},
        {username: "Szabo Kristof",	      time: "21:06:39",        comment: "- "},
        {username: "Nagy Lajos",	        time: "09:16:11",        comment: "Ciklusbelépő"},
        {username: "Don Paco",	          time: "02:19:10",        comment: "1. Warn"},
        {username: "Alex White",	        time: "00:00:00",        comment: "1. Warn"},
        {username: "Smith jhon",	        time: "00:00:00",        comment: "2. Warn"},
        {username: "Lakatos Leonidász",	  time: "05:53:53",        comment: "Szabadság"},
        {username: "West Jacob",	        time: "02:45:12",        comment: "Szabadság"},
        {username: "Oswald Istvan",	      time: "00:00:00",        comment: "3. Warn - Kirúgás"},       
        {username: "David James",         time: "00:00:00",        comment: "Felmondás"},               
        {username: "Veres Feri",	        time: "00:00:00",        comment: "Felmondás"},               
        {username: "Roberto Phillips",	  time: "15:13:57",        comment: "Felmondás"}               
        ]


return (
    <div className="archived-container">

      <table className="table">
        <thead>
            <th colspan="3">3. Ciklus - 2023.05.01-05.15</th>
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
            <th colspan="3">4. Ciklus - 2023.05.15-05.29</th>
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

      <table className="table">
        <thead>
            <th colspan="3">5. Ciklus - 2023.05.29-06.14</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData5.map((data, id) => {
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
            <th colspan="3">6. Ciklus - 2023.06.14-06.26</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData6.map((data, id) => {
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
            <th colspan="3">7. Ciklus - 2023.06.26-07.11</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData7.map((data, id) => {
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
            <th colspan="3">8. Ciklus - 2023.07.11-07.23</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData8.map((data, id) => {
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
            <th colspan="3">9. Ciklus - 2023.07.23-08.07</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData9.map((data, id) => {
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
            <th colspan="3">10. Ciklus - 2023.08.07-08.21</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData10.map((data, id) => {
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
            <th colspan="3">11. Ciklus - 2023.08.21-09.04</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData11.map((data, id) => {
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
            <th colspan="3">12. Ciklus - 2023.09.04-09.19</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData12.map((data, id) => {
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
            <th colspan="3">13. Ciklus - 2023.09.19-10.02</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData13.map((data, id) => {
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
            <th colspan="3">14. Ciklus - 2023.09.02-10.16</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData14.map((data, id) => {
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
            <th colspan="3">15. Ciklus - 2023.10.16-10.29</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData15.map((data, id) => {
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
            <th colspan="3">16. Ciklus - 2023.10.29-11.12</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData16.map((data, id) => {
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
            <th colspan="3">17. Ciklus - 2023.11.12-11.26</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData17.map((data, id) => {
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
            <th colspan="3">18. Ciklus - 2023.11.26-12.11</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData18.map((data, id) => {
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
            <th colspan="3">19. Ciklus - 2023.12.11-2024.01.03</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData19.map((data, id) => {
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
            <th colspan="3">20. Ciklus - 2024.01.03-01.14</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData20.map((data, id) => {
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
            <th colspan="3">21. Ciklus - 2024.01.14-01.29</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData21.map((data, id) => {
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
            <th colspan="3">22. Ciklus - 2024.01.29-02.11</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData22.map((data, id) => {
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
            <th colspan="3">23. Ciklus - 2024.02.11-02.25</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData23.map((data, id) => {
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
            <th colspan="3">24. Ciklus - 2024.02.25-03.10</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData24.map((data, id) => {
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
            <th colspan="3">25. Ciklus - 2024.03.10-03.24</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData25.map((data, id) => {
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
            <th colspan="3">26. Ciklus - 2024.03.24-04.07</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData26.map((data, id) => {
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
            <th colspan="3">27. Ciklus - 2024.04.07-04.21</th>
          <tr>
            <th>N&eacute;v</th>
            <th>Idő</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {dutyData27.map((data, id) => {
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
