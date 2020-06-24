import firebase from 'firebase/app';

// The imports below will automatically attach firestore, auth to the firebase object above
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAJ5qacKMwSy4dESMkq8TnQWVqH9LP8b2E",
    authDomain: "clothing-db-c527e.firebaseapp.com",
    databaseURL: "https://clothing-db-c527e.firebaseio.com",
    projectId: "clothing-db-c527e",
    storageBucket: "clothing-db-c527e.appspot.com",
    messagingSenderId: "461154545407",
    appId: "1:461154545407:web:c350b47292ea300c69e6ca",
    measurementId: "G-GQ97D2XSS2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setup google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
// Trigger the Google popup whenever we use Google auth provider for authentication and sign in
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;