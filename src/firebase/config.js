// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAAtaQc08WqFa44XsD73VoG9cBoHr9RO6U",
  authDomain: "eshop-798ad.firebaseapp.com",
  projectId: "eshop-798ad",
  storageBucket: "eshop-798ad.appspot.com",
  messagingSenderId: "1032827021512",
  appId: "1:1032827021512:web:3a1a757c7b3bb333629dfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;