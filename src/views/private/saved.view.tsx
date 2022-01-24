import { getFirestore, doc, setDoc, onSnapshot } from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { initializeApp } from 'firebase/app';

import { useContext } from 'react';
import UserContext from "../../components/user-context";

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

export function SavedImages() {
    let images: any = []
    const userId = auth.currentUser?.uid
    const { user, setUser } = useContext(UserContext);
    //console.log(user);
    onSnapshot(doc(db, "users", String(userId)), (doc) => {
        console.log(doc.data()?.images);
    });



    return (
        <div>Saved Images: {user}: {userId}</div>
    )
}