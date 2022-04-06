import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBa_PRbwKu8WZHikSp0yC51vOObdS9d0sE",
    authDomain: "qr-code-97099.firebaseapp.com",
    projectId: "qr-code-97099",
    storageBucket: "qr-code-97099.appspot.com",
    messagingSenderId: "1052576706194",
    appId: "1:1052576706194:web:fccb6efababaa5082cc04b",
    measurementId: "G-SR49Q2DG1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);