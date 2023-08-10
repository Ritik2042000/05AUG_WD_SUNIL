// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcI9KskpYc2leuL2biNaePQe3FncTyOyA",
  authDomain: "fir-crud-d84e2.firebaseapp.com",
  projectId: "fir-crud-d84e2",
  storageBucket: "fir-crud-d84e2.appspot.com",
  messagingSenderId: "1070619202727",
  appId: "1:1070619202727:web:f806373b6b84437fcff782"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)