import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfigChat = {
  apiKey: "AIzaSyDxYuZHP_nZhLTCN8cixqs7EbanuBJjgpA",
  authDomain: "react-chat-5eca4.firebaseapp.com",
  projectId: "react-chat-5eca4",
  storageBucket: "react-chat-5eca4.appspot.com",
  messagingSenderId: "568648964747",
  appId: "1:568648964747:web:a73feb1c7f6fe848a2528e",
};

const firebaseConfigDictionary = {
  apiKey: "AIzaSyBAuEpgvwg7h2PeX14TKieuq36Bm-Bh3YQ",
  authDomain: "dictionary-f1f5c.firebaseapp.com",
  projectId: "dictionary-f1f5c",
  storageBucket: "dictionary-f1f5c.appspot.com",
  messagingSenderId: "982223721588",
  appId: "1:982223721588:web:bfb9f23d751393dcc2ad21",
};

const appChat = initializeApp(firebaseConfigChat, 'chatapp');
export const authChat = getAuth(appChat);
export const dbChat = getFirestore(appChat);

const appDictionary = initializeApp(firebaseConfigDictionary, 'dictionary');
export const authDictionary = getAuth(appDictionary);
export const dbDictionary = getFirestore(appDictionary);