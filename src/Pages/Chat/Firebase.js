// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxYuZHP_nZhLTCN8cixqs7EbanuBJjgpA",
  authDomain: "react-chat-5eca4.firebaseapp.com",
  projectId: "react-chat-5eca4",
  storageBucket: "react-chat-5eca4.appspot.com",
  messagingSenderId: "568648964747",
  appId: "1:568648964747:web:a73feb1c7f6fe848a2528e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);