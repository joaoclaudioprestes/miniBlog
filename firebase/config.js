// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEdwMrAPI8p5G-GNokPPNqlWE4SLk0OwI",
  authDomain: "miniblog-b4f85.firebaseapp.com",
  projectId: "miniblog-b4f85",
  storageBucket: "miniblog-b4f85.appspot.com",
  messagingSenderId: "33790632256",
  appId: "1:33790632256:web:e66952c8cdbabe06739aa5",
  measurementId: "G-4GDZVX0DFJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Chamar banco de dados
