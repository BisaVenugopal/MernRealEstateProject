// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   apiKey: "AIzaSyBaeyiKPaKUDwbVKuaNLmPj0ZRRTA3SpVo",
  authDomain: "mern-estate-982e0.firebaseapp.com",
  projectId: "mern-estate-982e0",
  storageBucket: "mern-estate-982e0.appspot.com",
  messagingSenderId: "232728587502",
  appId: "1:232728587502:web:dec581d918b3c9b1c217ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);