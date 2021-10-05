import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyDt4JvPbv7NFWwytKYmDSTr0XWsrbMdv3M",
    authDomain: "najj-online-tutor.firebaseapp.com",
    projectId: "najj-online-tutor",
    storageBucket: "najj-online-tutor.appspot.com",
    messagingSenderId: "463326595403",
    appId: "1:463326595403:web:f2229cfcf432f1aa2a80ce",
    measurementId: "G-08ZKMR2EKD"
  };

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export { storage, initializeApp as default }


