import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-8a73b.firebaseapp.com",
  projectId: "react-chat-8a73b",
  storageBucket: "react-chat-8a73b.appspot.com",
  messagingSenderId: "983083377535",
  appId: "1:983083377535:web:724cb1fe42785b28be304a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();   
export const db = getFirestore();
export const storage = getStorage();




