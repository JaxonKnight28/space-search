import { useContext } from "react";
import { Button, Container } from "semantic-ui-react";
import { useNavigate } from "react-router";

//FIREBASE---------
//import { initializeApp } from "firebase/app";
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

//const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore()
//FIREBASE----------

export function Account() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function SignInGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                //const credential = GoogleAuthProvider.credentialFromResult(result);
                //const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                //keeps the old array
                if (!doc(db, "users", String(user.uid))) {
                    const userRef = doc(db, "users", user.uid);
                    setDoc(userRef, { images: [] });
                }
                //context
                window.localStorage.setItem('space-name', String(user.displayName));
                window.localStorage.setItem('UID', String(user.uid));
                setUser(user.uid);
                navigate('/');


                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage, errorCode, email, credential);
                // ...
            });
    }

    function SignUpGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                //const credential = GoogleAuthProvider.credentialFromResult(result);
                //const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                //erases or creates new image array
                const userRef = doc(db, "users", user.uid);
                setDoc(userRef, { images: [] });
                //context
                window.localStorage.setItem('space-name', String(user.displayName));
                window.localStorage.setItem('UID', String(user.uid));
                setUser(user.uid);
                navigate('/');


                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage, errorCode, email, credential);
                // The AuthCredential type that was used.
                // ...
            });
    }

    function logOut() {
        signOut(auth).then(() => {
            window.localStorage.setItem('space-name', '');
            window.localStorage.setItem('UID', '');
            setUser('');
            navigate('/')

        }).catch((error) => {
            console.log(error);

        });
    }

    return (
        <Container style={{ width: 500 }}>
            <div className="ui hidden divider"></div>
            <h2>Here you can login with a Google account</h2>
            <Container>
                <h4>Click here if you have already made an account</h4>
                <Button id="signInGoogle" onClick={SignInGoogle}>Login with Google</Button>
            </Container>
            <div className="ui divider"></div>
            <Container>
                <h4>Click here if you have not made an account or want to reset an old account</h4>
                <Button id="signInGoogle" onClick={SignUpGoogle}>Create new Account with Google</Button>
            </Container>
            <div className="ui divider"></div>
            <Container>
                <h4>Click here to sign out</h4>
                <Button onClick={logOut}>SignOut</Button>
            </Container>
        </Container>
    )
}