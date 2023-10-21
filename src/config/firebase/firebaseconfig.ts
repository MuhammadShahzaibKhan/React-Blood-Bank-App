// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPDfKzAwgNrLi_tsgCsDDRjDfJfB4RN0g",
  authDomain: "react-task-managment.firebaseapp.com",
  projectId: "react-task-managment",
  storageBucket: "react-task-managment.appspot.com",
  messagingSenderId: "986515881836",
  appId: "1:986515881836:web:522109a63d9e9b67e5fd49",
  measurementId: "G-ZZ8SB83CGK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
