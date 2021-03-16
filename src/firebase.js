import firebase from "firebase";
import 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyCbKnASpepPJyvvgcyKSvG_p48gnz08lYU",
    authDomain: "bt3103-week-6-2f1fc.firebaseapp.com",
    projectId: "bt3103-week-6-2f1fc",
    storageBucket: "bt3103-week-6-2f1fc.appspot.com",
    messagingSenderId: "576023086730",
    appId: "1:576023086730:web:9f773ec3719a67d1d64f73",
    measurementId: "G-PWH0793FGL"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var database = firebase.firestore();
  export default database;