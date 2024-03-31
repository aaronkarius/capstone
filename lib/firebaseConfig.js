import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8pPePI4URCRv4Lem3S3isuS3hF-kFkzM",
    authDomain: "vetvoice-7bdb1.firebaseapp.com",
    projectId: "vetvoice-7bdb1",
    storageBucket: "vetvoice-7bdb1.appspot.com",
    messagingSenderId: "666865632954",
    appId: "1:666865632954:web:0464fb776a8309b6ad6483"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
