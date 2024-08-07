
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVMhToV5DoLe8TrHjnYHnNdR1CtsDlQnQ",
    authDomain: "insta-clone-1b689.firebaseapp.com",
    projectId: "insta-clone-1b689",
    storageBucket: "insta-clone-1b689.appspot.com",
    messagingSenderId: "966372073997",
    appId: "1:966372073997:web:4a7f772ea39d5f3f27eb44",
    measurementId: "G-80HL36JMEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize services to be used
const analytics = getAnalytics(app);
const storage = getStorage(app)
const dB = getFirestore(app)
const auth = getAuth(app)

export { storage, auth, analytics }
export default dB