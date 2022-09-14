import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: "stayclose-chat-app.firebaseapp.com",
    projectId: "stayclose-chat-app",
    storageBucket: "stayclose-chat-app.appspot.com",
    messagingSenderId: "792597306020",
    appId: "1:792597306020:web:a4ea33be4281b880f02431"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();