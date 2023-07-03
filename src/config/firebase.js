// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSMFtmN1PF6nZsqfjSDdtnrEbaJMTFuHE",
  authDomain: "horous-c3a36.firebaseapp.com",
  projectId: "horous-c3a36",
  storageBucket: "horous-c3a36.appspot.com",
  messagingSenderId: "140914245427",
  appId: "1:140914245427:web:baf23a602f50855691c846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);