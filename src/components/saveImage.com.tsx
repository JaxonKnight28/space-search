import { getFirestore, doc, setDoc, onSnapshot, updateDoc, arrayUnion } from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { initializeApp } from 'firebase/app';

import { useContext } from 'react';
import UserContext from "./user-context";

const firebaseConfig = {
    apiKey: "AIzaSyDjlGMy1qqdL0F-7HSv3OmVlgBPnYV1wVQ",
    authDomain: "space-search-aedd7.firebaseapp.com",
    projectId: "space-search-aedd7",
    storageBucket: "space-search-aedd7.appspot.com",
    messagingSenderId: "426086005370",
    appId: "1:426086005370:web:0273f231c84b1a03e9d9c3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore()

export async function SaveImage(params: any) {
    console.log(params);

    const userId = auth.currentUser?.uid
    const userRef = doc(db, "users", String(userId));
    await updateDoc(userRef, {
        images: arrayUnion(params)
    });

    // setDoc(userRef, { email: user.email, message: `Hello ${user.displayName}!` });
}
SaveImage('test')