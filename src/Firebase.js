// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBmwvkrEJ4ybrnMYz-uaNxmpnAw13GyKs",
    authDomain: "driving-test-practice-715f0.firebaseapp.com",
    projectId: "driving-test-practice-715f0",
    storageBucket: "driving-test-practice-715f0.appspot.com",
    messagingSenderId: "101514954211",
    appId: "1:101514954211:web:0f24351755b80622e6ccd6",
    measurementId: "G-566JYX4GBW"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);


 