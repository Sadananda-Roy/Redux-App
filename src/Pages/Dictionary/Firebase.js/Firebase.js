// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAuEpgvwg7h2PeX14TKieuq36Bm-Bh3YQ",
  authDomain: "dictionary-f1f5c.firebaseapp.com",
  projectId: "dictionary-f1f5c",
  storageBucket: "dictionary-f1f5c.appspot.com",
  messagingSenderId: "982223721588",
  appId: "1:982223721588:web:bfb9f23d751393dcc2ad21",
  measurementId: "G-276JDEVB9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, 'dictionary');
export const auth = getAuth(app);
export const db = getFirestore(app);