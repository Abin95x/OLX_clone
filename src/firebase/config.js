import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firestore'
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU9yM9bAxTkVXjpnBFxmZJyv25iW6oww8",
  authDomain: "fir-42248.firebaseapp.com",
  projectId: "fir-42248",
  storageBucket: "fir-42248.appspot.com",
  messagingSenderId: "404467325922",
  appId: "1:404467325922:web:ce71432ac7ef782e1737bb",
  measurementId: "G-GL6H7QNCQ1"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);