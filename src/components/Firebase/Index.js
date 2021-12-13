import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFSHoLm9F1VL0kHqpK5rXKU_hp5kQy_XA",
  authDomain: "las-charris.firebaseapp.com",
  projectId: "las-charris",
  storageBucket: "las-charris.appspot.com",
  messagingSenderId: "831828399646",
  appId: "1:831828399646:web:7d38413a3bb93a70ed400f",
  // measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
