import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCCoy-otAepS4fzRpQzWnfb0bjHr6Momqo",
    authDomain: "enableauthentication-3742c.firebaseapp.com",
    projectId: "enableauthentication-3742c",
    storageBucket: "enableauthentication-3742c.firebasestorage.app",
    messagingSenderId: "923457480531",
    appId: "1:923457480531:web:8f766c2970264aa7f4e3a6",
    measurementId: "G-CQ86HTHZ8W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
