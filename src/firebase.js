import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDmaCIWZvxGhqRAtI7gIW5NI0iONiGlSM4",
    authDomain: "robinhood-14a5d.firebaseapp.com",
    projectId: "robinhood-14a5d",
    storageBucket: "robinhood-14a5d.appspot.com",
    messagingSenderId: "863439484949",
    appId: "1:863439484949:web:13dc0ab47263c9851f361c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };