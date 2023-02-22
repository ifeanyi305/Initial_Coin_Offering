import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAgEeJuUba_XNTsdHa0WNtpqgGWmFmALoo",
    authDomain: "ico-launchpad-2b84a.firebaseapp.com",
    projectId: "ico-launchpad-2b84a",
    storageBucket: "ico-launchpad-2b84a.appspot.com",
    messagingSenderId: "90438970595",
    appId: "1:90438970595:web:5d4489d0980ff422bb29d6"
  };
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
