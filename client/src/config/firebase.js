import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyBrd2IpE6LNxL4AHS14Amx_ovR7Flby7Ak",
  authDomain: "travel-blog-a7715.firebaseapp.com",
  databaseURL:
    "https://travel-blog-a7715-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "travel-blog-a7715",
  storageBucket: "travel-blog-a7715.appspot.com",
  messagingSenderId: "1000438464441",
  appId: "1:1000438464441:web:0f4756216d2dc0aafb8068",
});

export const auth = getAuth(app);
export default app;
