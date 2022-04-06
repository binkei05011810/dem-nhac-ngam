import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  Timestamp
} from "firebase/firestore";

function App() {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);
  const ipsCollectionRef = collection(db, "users");

  useEffect(() => {
    const register = async () => {
      const res = await axios.get('https://geolocation-db.com/json/');
      const data = await getDocs(ipsCollectionRef);
      const ip = res.data.IPv4;
      const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const ips = users.map(usr => usr.ip);

      if (ips.includes(ip)) {
        const currentUser = users.find(usr => usr.ip === ip);
        setUser(currentUser);
        setMessage('You have already registered');
        return;
      }

      if (ips.length >= 200) {
        setMessage('Run out of ticket. See you in next event!');
        return;
      }

      const newUser = { ip: ip, time: Timestamp.fromDate(new Date()), ticketNumber: ips.length + 1 };
      await addDoc(ipsCollectionRef, newUser);
      setUser(newUser);
      setMessage('Successfully registered!');
    }

    register();
  }, []);

  return (
    <div className="app">
      {user &&
        <div>
          <h1>{message}</h1>
          <p>Your ticket number is: {user.ticketNumber}</p>
        </div>
      }
    </div>
  );
}

export default App;
