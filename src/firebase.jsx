import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/app";
// import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyBMhVx-S7HqCtTQgBqgdirQjZxHxUk8Sk4",
  authDomain: "designer-clothes-78975.firebaseapp.com",
  projectId: "designer-clothes-78975",
  storageBucket: "designer-clothes-78975.appspot.com",
  messagingSenderId: "826120552649",
  appId: "1:826120552649:web:4443e811681d5b1d6e4d18",
  measurementId: "G-CMQKDK4FER"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
// const db = firebase.firestore();
