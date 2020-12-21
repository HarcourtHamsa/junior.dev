import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyABmCUHyUroq7jCeUiI6ZtQPBynx2ySFpw",
    authDomain: "juniordev-7f371.firebaseapp.com",
    projectId: "juniordev-7f371",
    storageBucket: "juniordev-7f371.appspot.com",
    messagingSenderId: "809228685423",
    appId: "1:809228685423:web:02c17420b5bd3dfd48bd9a",
    measurementId: "G-B8NYZMVEDX"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();