import { getFirestore, doc, setDoc, onSnapshot, getDoc, collection } from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { initializeApp } from 'firebase/app';

import { useContext, useEffect, useState } from 'react';
import UserContext from "../../components/user-context";
import { Button, Container, Image } from 'semantic-ui-react';
import { RemoveImage } from '../../components/saveImage.com';

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
    //let images: any = []
    let imgData
    const userId = auth.currentUser?.uid
    const { user, setUser } = useContext(UserContext);
    const [images, setImages] = useState<any>([])

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, "users", String(userId)), (doc) => {
            //console.log("Current data: ", doc.data());
            setImages(doc.data())
        });
        return () => unsubscribe()
    }, [])

    imgData = images?.images

    return (
        <Container>
            <h2>These are the saved images from {user}:</h2>
            {
                imgData?.map((item: any, index: any) => (
                    <Container>
                        <Button key={index} onClick={() => RemoveImage(`${item}`)} floated="right" color="red">Remove</Button>
                        <Image key={index} src={item} />

                    </Container>
                ))
            }
        </Container>
    )
}