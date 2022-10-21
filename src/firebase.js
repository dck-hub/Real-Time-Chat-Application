import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
        apiKey: "AIzaSyD6CkastAKdNVGrqMBqnQFdinIUSVxlsgM",
        authDomain: "chatapp-bf0e1.firebaseapp.com",
        projectId: "chatapp-bf0e1",
        storageBucket: "chatapp-bf0e1.appspot.com",
        messagingSenderId: "950206043449",
        appId: "1:950206043449:web:2e4c20c3dbc73924b244e8"
      
}).auth();