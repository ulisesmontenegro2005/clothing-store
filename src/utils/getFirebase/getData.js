// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDZa6uw1VmYDb5i0TrunqDMvnE5cYaPw4",
  authDomain: "clothing-store-ulises.firebaseapp.com",
  projectId: "clothing-store-ulises",
  storageBucket: "clothing-store-ulises.appspot.com",
  messagingSenderId: "1007416411372",
  appId: "1:1007416411372:web:49425186496a08447d51c9",
  measurementId: "G-6RH83BC9DE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
