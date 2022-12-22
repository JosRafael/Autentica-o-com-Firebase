// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL734KSiW5tG2IX41U4FhKHauehGw_YuE",
  authDomain: "fir-app-1e396.firebaseapp.com",
  projectId: "fir-app-1e396",
  storageBucket: "fir-app-1e396.appspot.com",
  messagingSenderId: "943811359229",
  appId: "1:943811359229:web:d25b86efb2805fc1056994",
  measurementId: "G-QS9W8BVLVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);