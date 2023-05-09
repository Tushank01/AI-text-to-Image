 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUzuw4OsnXb1v4HfR3IdbfKgByxjQSfZI",
  authDomain: "imagegen-ee7c3.firebaseapp.com",
  projectId: "imagegen-ee7c3",
  storageBucket: "imagegen-ee7c3.appspot.com",
  messagingSenderId: "86997635251",
  appId: "1:86997635251:web:5d745131045a3a59dd60c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)
const Provider =  new GoogleAuthProvider()
const db = getFirestore(app)
const storage = getStorage(app)
const API_TOKEN = "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";

export {Auth, Provider, db, storage, API_TOKEN};