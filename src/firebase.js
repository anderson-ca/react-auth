import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAs54wg0qmPbyUtBzZUI2Ddil5J3ufnnio",
  authDomain: "react-authentication-d4d46.firebaseapp.com",
  projectId: "react-authentication-d4d46",
  storageBucket: "react-authentication-d4d46.appspot.com",
  messagingSenderId: "777372871223",
  appId: "1:777372871223:web:a84eda6f842dfb3c5b2db2",
  measurementId: "G-JC5X31WY0N",
});

export const auth = app.auth();
export default app;
