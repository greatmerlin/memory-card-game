import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDqxEG-txxWhcNlGYLa8EbpOfP_qvMeo2E",
  authDomain: "memoryup-4c3eb.firebaseapp.com",
  databaseURL:
    "https://memoryup-4c3eb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "memoryup-4c3eb",
  storageBucket: "memoryup-4c3eb.appspot.com",
  messagingSenderId: "1098798999088",
  appId: "1:1098798999088:web:c0a5e8898e4bd75f72aff5",
  measurementId: "G-K0HK0ZM796",
};

firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line no-unused-vars
const database = firebase.database();

export default firebase;
