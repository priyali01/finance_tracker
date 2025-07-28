// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.NEXT_PUBLIC_FIREBASE_API_KEY,",
  authDomain: "finaylzeit.firebaseapp.com",
  projectId: "finaylzeit",
  storageBucket: "finaylzeit.firebasestorage.app",
  messagingSenderId: "154181877754",
  appId: "1:154181877754:web:2facc094d264c9c607ae43",
  measurementId: "G-QRECZNFJJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);