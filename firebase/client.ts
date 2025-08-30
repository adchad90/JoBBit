// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhFMOX9ZSrbjXxgV3D2Aj6Ij_8_CgzquI",
    authDomain: "jobbit-69250.firebaseapp.com",
    projectId: "jobbit-69250",
    storageBucket: "jobbit-69250.firebasestorage.app",
    messagingSenderId: "613844508056",
    appId: "1:613844508056:web:d35d0509940ad87ce1dfed",
    measurementId: "G-9BFSY98CW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);