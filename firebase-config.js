// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAalKEO00lcy21YRRSXR1Q9wVSUmQGcPJM",
  authDomain: "eshop-97f97.firebaseapp.com",
  databaseURL: "https://eshop-97f97-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eshop-97f97",
  storageBucket: "eshop-97f97.firebasestorage.app",
  messagingSenderId: "534719249406",
  appId: "1:534719249406:web:5b8a5a217346cd17d45eaf",
  measurementId: "G-QM0JPNB3R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);