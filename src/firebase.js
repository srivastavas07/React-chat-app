// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "Api_key", //Enter your Api key here..
  authDomain: "kunalchat07-a6309.firebaseapp.com",
  projectId: "Project_id", //Enter project id here..
  storageBucket: "kunalchat07-a6309.appspot.com",
  messagingSenderId: "473378893096",
  appId: "App_id", //Enter your app id here..
  measurementId: "G-CX80JC0KCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
 const auth = getAuth(app);
 const db = getFirestore()
 const googleProvider = new GoogleAuthProvider();
export {auth,googleProvider,db}

