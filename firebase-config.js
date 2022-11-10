import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNv8SIOkLyJamqR4ZB4g9hMrcPZASTcoA",
    authDomain: "upb-parking-app.firebaseapp.com",
    projectId: "upb-parking-app",
    storageBucket: "upb-parking-app.appspot.com",
    messagingSenderId: "163030056557",
    appId: "1:163030056557:web:7a960189096f020ef20964",
    measurementId: "G-NW1K3RFFTX"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);