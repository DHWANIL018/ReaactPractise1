// Shree Ganeshay namah 


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCZMBrSNoDDoN4EvG6zcdMKCYOoF1fx01M",
  authDomain: "fullstack-a8a16.firebaseapp.com",
  projectId: "fullstack-a8a16",
  storageBucket: "fullstack-a8a16.firebasestorage.app",
  messagingSenderId: "175659939223",
  appId: "1:175659939223:web:abffa25a78f5e0991dc0d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth