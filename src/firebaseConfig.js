import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVkP9um_IOKu9rpxuY_afklmJ889hIg5s",
    authDomain: "ngam-project.firebaseapp.com",
    projectId: "ngam-project",
    storageBucket: "ngam-project.appspot.com",
    messagingSenderId: "980324069404",
    appId: "1:980324069404:web:edf3e130629c430504afd9",
    measurementId: "G-T5EWDZN7XW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);