import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9goQac9wfoir1T-GcXtBDg5EzxjdaO5U",
  authDomain: "linkedin-clone-digiorgio.firebaseapp.com",
  projectId: "linkedin-clone-digiorgio",
  storageBucket: "linkedin-clone-digiorgio.appspot.com",
  messagingSenderId: "407498888205",
  appId: "1:407498888205:web:ae3440baf6982e49b47144",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
