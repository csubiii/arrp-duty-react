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

      <table className="table">
        <thead>
            <th colspan="3">5. Ciklus - 05.29-06.14</th>
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
            <th colspan="3">6. Ciklus - 06.14-06.26</th>
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
            <th colspan="3">7. Ciklus - 06.26-07.11</th>
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
            <th colspan="3">8. Ciklus - 07.11-07.23</th>
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
            <th colspan="3">9. Ciklus - 07.23-08.07</th>
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
            <th colspan="3">10. Ciklus - 08.07-08.21</th>
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
            <th colspan="3">11. Ciklus - 08.21-09.04</th>
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
            <th colspan="3">12. Ciklus - 09.04-09.19</th>
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
    </div>
  );
};

export default ArchivedDutys;
