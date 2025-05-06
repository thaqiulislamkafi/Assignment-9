
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-RKXa_P3NJ5YbvXOKN1GX0bHboVXY_J8",
  authDomain: "simple-firebase-authenti-6c9ff.firebaseapp.com",
  projectId: "simple-firebase-authenti-6c9ff",
  storageBucket: "simple-firebase-authenti-6c9ff.firebasestorage.app",
  messagingSenderId: "621419206588",
  appId: "1:621419206588:web:fa747f68edeefb08e6fdb9"
};


 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);