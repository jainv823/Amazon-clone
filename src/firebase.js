// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCUNcA_oAcVlJvybXdM9bGo2RjSgI_PIa8",
  authDomain: "clone-5fa05.firebaseapp.com",
  databaseURL: "https://clone-5fa05.firebaseio.com",
  projectId: "clone-5fa05",
  storageBucket: "clone-5fa05.appspot.com",
  messagingSenderId: "765535331764",
  appId: "1:765535331764:web:12f1271ee530024c61bee1",
  measurementId: "G-M6P0NHKK8F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}
