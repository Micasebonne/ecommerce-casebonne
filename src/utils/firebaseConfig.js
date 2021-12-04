// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUyXdQgDEZcAHJ8Pl401Dq-bvG6nQ_o2Y",
  authDomain: "derzauberladen-e189a.firebaseapp.com",
  projectId: "derzauberladen-e189a",
  storageBucket: "derzauberladen-e189a.appspot.com",
  messagingSenderId: "986458904069",
  appId: "1:986458904069:web:83bdb81e782a62c06dae6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;