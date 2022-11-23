// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgiwwee5BqcJw2VIUjxtKfYnjeIMt-1Ho",
  authDomain: "next-car-61df2.firebaseapp.com",
  projectId: "next-car-61df2",
  storageBucket: "next-car-61df2.appspot.com",
  messagingSenderId: "313211187612",
  appId: "1:313211187612:web:e57545a56a0077ee091859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app