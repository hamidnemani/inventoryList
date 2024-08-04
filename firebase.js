// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsL023boPgUv2SSPLFKIxBhFEZkJf-t9E",
  authDomain: "inventory-management-e39c3.firebaseapp.com",
  projectId: "inventory-management-e39c3",
  storageBucket: "inventory-management-e39c3.appspot.com",
  messagingSenderId: "835181331833",
  appId: "1:835181331833:web:c715118ee47bef3bfb1ba8",
  measurementId: "G-YDTX28J7RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export{firestore}