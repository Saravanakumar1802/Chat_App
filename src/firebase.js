
import "firebase/auth"
import firebase from 'firebase/app';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDcjrg2oeYH3s-JWLFkNJ5pXKnKzMDCn9s",
    authDomain: "letschat-fe2c5.firebaseapp.com",
    projectId: "letschat-fe2c5",
    storageBucket: "letschat-fe2c5.appspot.com",
    messagingSenderId: "408653364168",
    appId: "1:408653364168:web:35df43bb9b57089f00defd"
}).auth();