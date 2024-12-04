// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKzwVXqrlf2WBSihtnkqRUjmqhrdt8kqY",
  authDomain: "ai-academy-asia.firebaseapp.com",
  projectId: "ai-academy-asia",
  storageBucket: "ai-academy-asia.firebasestorage.app",
  messagingSenderId: "950063556704",
  appId: "1:950063556704:web:5217ff3c9d3339a8a5fb05"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;