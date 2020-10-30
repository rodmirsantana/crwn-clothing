import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA-fLNcdK2O-KrvTUD2oYCLObrfgzsIqx8",
  authDomain: "crwn-clothing-db-18340.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-18340.firebaseio.com",
  projectId: "crwn-clothing-db-18340",
  storageBucket: "crwn-clothing-db-18340.appspot.com",
  messagingSenderId: "999856204566",
  appId: "1:999856204566:web:f3081d827261947be57e37",
  measurementId: "G-WE5JL53HP8"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;