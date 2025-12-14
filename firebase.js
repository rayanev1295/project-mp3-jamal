// Import Firebase (module CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut }
    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// CONFIG fournie par ton Firebase
const firebaseConfig = {
  apiKey: "AIzaSyByv8z7ZFPqxVcArVLiVYFl7oD0EgS-bSw",
  authDomain: "jamal-mp3.firebaseapp.com",
  projectId: "jamal-mp3",
  storageBucket: "jamal-mp3.firebasestorage.app",
  messagingSenderId: "863019094336",
  appId: "1:863019094336:web:b6fc5308ef34bbb2b2aaa5",
  measurementId: "G-SDLXK2J35S"
};

// INITIALISATION
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// EXPORT
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut };