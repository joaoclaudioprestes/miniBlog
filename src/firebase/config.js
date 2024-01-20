import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4R-2da6T4AB5N6Ufh_hWVXqmjLh3H5uo",
  authDomain: "miniblog-cb761.firebaseapp.com",
  projectId: "miniblog-cb761",
  storageBucket: "miniblog-cb761.appspot.com",
  messagingSenderId: "611651920609",
  appId: "1:611651920609:web:406249ae1244ae6cba4da0",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }
