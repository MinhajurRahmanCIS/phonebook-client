// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwlGY1sFcWpEQwSV2gE34pnd4ApVYO6F0",
    authDomain: "phonebook-db350.firebaseapp.com",
    projectId: "phonebook-db350",
    storageBucket: "phonebook-db350.appspot.com",
    messagingSenderId: "582913499845",
    appId: "1:582913499845:web:51da99c1df97f6f49f86ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;