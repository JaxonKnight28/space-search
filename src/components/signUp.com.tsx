import { useContext, useState } from "react";
import { Button, Container } from "semantic-ui-react";
import { useNavigate } from "react-router";

//FIREBASE---------
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
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
                //keeps the old array
                if (!doc(db, "users", String(user.uid))) {
                    console.log('true');
                    const userRef = doc(db, "users", user.uid);
                    setDoc(userRef, { images: [] });
                }
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

    function SignUpGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                //erases or creates new image array
                console.log('true');
                const userRef = doc(db, "users", user.uid);
                setDoc(userRef, { images: [] });
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
            <Container>
                <h4>Click here if you have already made an account</h4>
                <Button id="signInGoogle" onClick={SignInGoogle}>Login with Google</Button>
            </Container>
            <div className="ui hidden divider"></div>
            <Container>
                <h4>Click here if you have not made an account or want to reset an old account</h4>
                <Button id="signInGoogle" onClick={SignUpGoogle}>Create new Account</Button>
            </Container>
            <div className="ui hidden divider"></div>
            <Container>
                <h4>Click here to sign out</h4>
                <Button onClick={logOut}>SignOut</Button>
            </Container>
        </Container>
    )
}