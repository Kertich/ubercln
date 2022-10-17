// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGEmhTM1a-l6M0pfXBeZrIn6JfHQfZsIY",
  authDomain: "uber-next-clone-live-fefc4.firebaseapp.com",
  projectId: "uber-next-clone-live-fefc4",
  storageBucket: "uber-next-clone-live-fefc4.appspot.com",
  messagingSenderId: "51979528816",
  appId: "1:51979528816:web:f00c6629230599020c62b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }