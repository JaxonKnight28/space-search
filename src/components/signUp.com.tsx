import { useContext, useState } from "react";
import { Button, Container, Form } from "semantic-ui-react";
import { useNavigate } from "react-router";

//FIREBASE---------
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore, doc, setDoc, onSnapshot } from 'firebase/firestore'
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
//FIREBASE----------

export type SignUpValues = {
    email?: string;
    password?: string;
}

export function SignUpComp() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate()
    const [signUpData, setLogInData] = useState<SignUpValues>({})

    function SignInGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                //db
                const userRef = doc(db, "users", user.uid);
                setDoc(userRef, { images: [] });
                //email: user.email, message: `Hello ${user.displayName}!`
                //context
                window.localStorage.setItem('space-name', String(user.displayName))
                window.localStorage.setItem('UID', String(user.uid))
                setUser(user.uid)


                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    function logOut() {
        signOut(auth).then(() => {
            console.log('Signed out');
            window.localStorage.setItem('space-name', '')
            window.localStorage.setItem('UID', '')
            setUser('')

        }).catch((error) => {
            console.log(error);

        });
    }

    return (
        <Container>
            <Button id="signInGoogle" onClick={SignInGoogle}>Login with Google</Button>
            <Button onClick={logOut}>SignOut</Button>
        </Container>
    )
}