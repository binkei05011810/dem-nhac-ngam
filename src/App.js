import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

function App() {
  const [message, setMessage] = useState('');
  const ipsCollectionRef = collection(db, "ips");

  const addIp = async (ip) => {
    await addDoc(ipsCollectionRef, { ip });
    setMessage('Successfully registered!');
  };

  useEffect(() => {
    const register = async () => {
      const res = await axios.get('https://geolocation-db.com/json/');
      const data = await getDocs(ipsCollectionRef);
      const ip = res.data.IPv4;
      const ips = data.docs.map(doc => doc.data().ip);

      console.log('ip', ip);
      console.log('ips', ips);

      if (ips.includes(ip)) {
        setMessage('You have already registered');
        return;
      }

      if (ips.length >= 200) {
        setMessage('Run out of ticket. See you in next event!');
        return;
      }

      addIp(ip);
    }

    register();
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
