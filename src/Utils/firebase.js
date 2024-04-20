// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkUo_cO1pN4I1eR3HQ6wHbRPiglh5PY3s",
  authDomain: "netflixgpt-3922c.firebaseapp.com",
  projectId: "netflixgpt-3922c",
  storageBucket: "netflixgpt-3922c.appspot.com",
  messagingSenderId: "846560236429",
  appId: "1:846560236429:web:b321aa2998dfe47f7663c4",
  measurementId: "G-DJ0W7LJF5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();