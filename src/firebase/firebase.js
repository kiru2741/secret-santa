// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYkcfMqte6awVLNbDV-Obg1riHK4JtLaM",
  authDomain: "secret-santa-f669f.firebaseapp.com",
  projectId: "secret-santa-f669f",
  storageBucket: "secret-santa-f669f.appspot.com",
  messagingSenderId: "112658891852",
  appId: "1:112658891852:web:0770883182127abed220e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
