// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWxkLeIJYH93Q-guuP-VTBmsWYobBixzY",
  authDomain: "coffee-store-b4a20.firebaseapp.com",
  projectId: "coffee-store-b4a20",
  storageBucket: "coffee-store-b4a20.firebasestorage.app",
  messagingSenderId: "872243144145",
  appId: "1:872243144145:web:6b6c2a099014b732f8acf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);