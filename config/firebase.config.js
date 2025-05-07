// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getstorage} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "velora-a482d.firebaseapp.com",
  projectId: "velora-a482d",
  storageBucket: "velora-a482d.firebasestorage.app",
  messagingSenderId: "907358528526",
  appId: "1:907358528526:web:28c9b1535e29fef293085f"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
// const storage = getstorage(app)


export {db }