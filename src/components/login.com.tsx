import { useContext, useState } from "react"
import { Button, Container, Form } from "semantic-ui-react"
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, setDoc, onSnapshot } from 'firebase/firestore'
import UserContext from "./user-context";

//set types
export type LoginValues = {
    email?: string;
    password?: string;
}

//FIREBASE---------
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
export function Login() {
    const [loginData, setLogInData] = useState<LoginValues>({})
    const handleChange = ({ target: { value, name } }: any) => {
        setLogInData({ ...loginData, [name]: value })
    }

    //---firebase
    function SignInGoogle() {
        console.log('clicked');

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;

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
    // function SignInSep() {
    //     let email: any = loginData.email
    //     let password: any = loginData.password
    //     console.log(email, password);

    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             console.log(user);

    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             alert(errorMessage);

    //         });


    // }
    function logOut() {
        signOut(auth).then(() => {
            console.log('Signed out');

        }).catch((error) => {
            console.log(error);

        });
    }

    return (
        <Container>
            <Button id="signInGoogle" onClick={SignInGoogle}>Login with Google</Button>

            {/* <h4>Or use separate email and password:</h4>
            <Form onSubmit={SignInSep}>
                <Form.Field>
                    <label>Email</label>
                    <input onChange={handleChange} placeholder="email" name="email" />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type="password" onChange={handleChange} placeholder="Password" name="password" />
                </Form.Field>
                <Button type="submit">Login</Button>
            </Form>
            <Button onClick={logOut}>Sign Out</Button> */}
        </Container>
    );
}