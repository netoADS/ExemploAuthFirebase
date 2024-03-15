import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARfZ0WKoRn-Cvx_Iq55QitLMEx1ThfJpa",
  authDomain: "authproject-810dd.firebaseapp.com",
  projectId: "authproject-810dd",
  storageBucket: "authproject-810dd.appspot.com",
  messagingSenderId: "364679702202",
  appId: "1:364679702202:web:7e0f34045a73d6fc0e4483"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)

//E
