// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnHu3WWAUfWsYoYPE-K8122td9i7HjMVI",
  authDomain: "kunalchat07-a6309.firebaseapp.com",
  projectId: "kunalchat07-a6309",
  storageBucket: "kunalchat07-a6309.appspot.com",
  messagingSenderId: "473378893096",
  appId: "1:473378893096:web:813199d094f5baa126b41d",
  measurementId: "G-CX80JC0KCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
 const auth = getAuth(app);
 const db = getFirestore()
 const googleProvider = new GoogleAuthProvider();
export {auth,googleProvider,db}

