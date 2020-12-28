import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCmreuZeAV5n6OtdFJYwhh-rjj425UL4I0",
    authDomain: "reactnativedatabase-a4080.firebaseapp.com",
    databaseURL: "https://reactnativedatabase-a4080-default-rtdb.firebaseio.com",
    projectId: "reactnativedatabase-a4080",
    storageBucket: "reactnativedatabase-a4080.appspot.com",
    messagingSenderId: "339680846413",
    appId: "1:339680846413:web:bf531a11c59cf030f3f204",
    measurementId: "G-73QE344KNM"
  };
  // Initialize Firebase
  
  let app = firebase.initializeApp(config);
  export const db = app.database();