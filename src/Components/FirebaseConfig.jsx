import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDBtZlaLK86s_bevcRQHNSgOylHHEvSNJk",
  authDomain: "original-mesh-354415.firebaseapp.com",
  projectId: "original-mesh-354415",
  storageBucket: "original-mesh-354415.appspot.com",
  messagingSenderId: "891247666227",
  appId: "1:891247666227:web:833ef0a16df2cb13986f46"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);