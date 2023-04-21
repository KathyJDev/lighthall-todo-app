// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5p4ZJcG-23dCc_tGDhY2NWo9KEFCHXho",
  authDomain: "lighthall-todo.firebaseapp.com",
  projectId: "lighthall-todo",
  storageBucket: "lighthall-todo.appspot.com",
  messagingSenderId: "101275951677",
  appId: "1:101275951677:web:9a82348363b519201b8054",
  measurementId: "G-945L1GNL3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)