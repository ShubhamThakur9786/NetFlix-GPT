// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKjvZVpRfHrAfJPUyCBQ0-LQi0Jq-E1Y8",
  authDomain: "netflixgpt-41e6b.firebaseapp.com",
  projectId: "netflixgpt-41e6b",
  storageBucket: "netflixgpt-41e6b.firebasestorage.app",
  messagingSenderId: "56299603182",
  appId: "1:56299603182:web:b72843b914b9ddd0845fff",
  measurementId: "G-VX1V1VBP6F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
