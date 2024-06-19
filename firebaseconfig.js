// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdqHdPpQk7w83UQiP5HB4NVVJSWEoOqjI",
  authDomain: "suit-plus.firebaseapp.com",
  projectId: "suit-plus",
  storageBucket: "suit-plus.appspot.com",
  messagingSenderId: "712570083766",
  appId: "1:712570083766:web:4dd0771727505865754917",
  measurementId: "G-P5V1TEX2BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);


export {auth,provider,db};