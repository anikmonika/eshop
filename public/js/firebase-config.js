// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// Konfigurasi Firebase
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

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

// Export supaya bisa digunakan di semua halaman
export { firebaseConfig, app, analytics, database, auth, ref, push, set };
