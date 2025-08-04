// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFTC98qBhrdIujN0H49aH-rjLHJU0YQeY",
  authDomain: "aacharya-ashok-kumar-sharma.firebaseapp.com",
  projectId: "aacharya-ashok-kumar-sharma",
  storageBucket: "aacharya-ashok-kumar-sharma.appspot.com",
  messagingSenderId: "727771831492",
  appId: "1:727771831492:web:acfd684924b626304a7d91",
  measurementId: "G-8C6C6YL641"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };