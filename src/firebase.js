// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrGQ8VDB0BHaaDA_VB9Fcmy50ZatJPYhY",
  authDomain: "web3estate.firebaseapp.com",
  projectId: "web3estate",
  storageBucket: "web3estate.firebasestorage.app",
  messagingSenderId: "213561436016",
  appId: "1:213561436016:web:4f7d2b0d7607b166b5d1b5",
  measurementId: "G-PPR22WJH01"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);     
export const db = getFirestore(app); 
export const storage = getStorage(app); 
