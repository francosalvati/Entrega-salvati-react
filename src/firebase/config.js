
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDvtfhcuwZTcqgiBCuMhNvoKjOubfXdJtU",
    authDomain: "poco-amoroso-e-comerce.firebaseapp.com",
    projectId: "poco-amoroso-e-comerce",
    storageBucket: "poco-amoroso-e-comerce.appspot.com",
    messagingSenderId: "418518915909",
    appId: "1:418518915909:web:bde4531879843fbd197c2c"
};


const app = initializeApp(firebaseConfig);

export const initFirebase = () => app