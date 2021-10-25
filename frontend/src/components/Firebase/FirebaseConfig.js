import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMumDKFNT93C4dlbeBsxTqRggMN_as7VY",
  authDomain: "tutory-club.firebaseapp.com",
  projectId: "tutory-club",
  storageBucket: "tutory-club.appspot.com",
  messagingSenderId: "274172159486",
  appId: "1:274172159486:web:da29a852e38260606d0caf",
  measurementId: "G-CJTMRQYDEX",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
