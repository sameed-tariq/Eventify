// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4690eiqmS1U9HnqJCnV2y65rCioRZC3w",
  authDomain: "eventify-e0fee.firebaseapp.com",
  databaseURL: "https://eventify-e0fee-default-rtdb.firebaseio.com",
  projectId: "eventify-e0fee",
  storageBucket: "eventify-e0fee.appspot.com",
  messagingSenderId: "268635237965",
  appId: "1:268635237965:web:f5e052a753b8a344473604",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app;
}
// export const auth = firebase.auth();

const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
