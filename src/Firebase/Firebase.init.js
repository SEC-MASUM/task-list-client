import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4HgWUnWzB7zxzJdF_WJlA41xdbQXAZ8s",
  authDomain: "task-list-01.firebaseapp.com",
  projectId: "task-list-01",
  storageBucket: "task-list-01.appspot.com",
  messagingSenderId: "975599854714",
  appId: "1:975599854714:web:0a4838f1ea991126a987c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
