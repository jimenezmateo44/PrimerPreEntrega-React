import { initializeApp } from "firebase/app"; //Inicia la conexion con Firebase 
import { getFirestore } from 'firebase/firestore'; //Obtenemos una instancia de Firestore


const firebaseConfig = {
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "unveil-conceptstore.firebaseapp.com",
  projectId: "unveil-conceptstore",
  storageBucket: "unveil-conceptstore.appspot.com",
  messagingSenderId: "96148603762",
  appId: "1:96148603762:web:dd31d23b83ef80567ed3eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);