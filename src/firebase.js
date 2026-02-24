// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDPKpXuMbOev24tDTp3pBPs5jtrpcS8TQ",
  authDomain: "smallfountain-c4577.firebaseapp.com",
  projectId: "smallfountain-c4577",
  storageBucket: "smallfountain-c4577.firebasestorage.app",
  messagingSenderId: "1066214432835",
  appId: "1:1066214432835:web:d40d5d4998752dd7bd74f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);