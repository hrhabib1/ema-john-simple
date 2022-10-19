// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRg-8TZXWsFrTwoOkczUVE5A0K-IKyPO0",
  authDomain: "ema-john-simple-6f3d2.firebaseapp.com",
  projectId: "ema-john-simple-6f3d2",
  storageBucket: "ema-john-simple-6f3d2.appspot.com",
  messagingSenderId: "356663348373",
  appId: "1:356663348373:web:c18924f5fbc05db2881f9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app