import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

//FIREBASE---------
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, addDoc } from "firebase/firestore"

initializeApp({
    apiKey: "AIzaSyD0x7_WJenbZkGSk9Ea_vRQ-9-OK9FRSq0",
    authDomain: "space-search-9533f.firebaseapp.com",
    projectId: "space-search-9533f",
    storageBucket: "space-search-9533f.appspot.com",
    messagingSenderId: "272593411706",
    appId: "1:272593411706:web:b0de1b50188314ca1de5c3",
    measurementId: "G-B19H85RRQV"
});

const db = getFirestore()
//FIREBASE----------

export type SignUpValues = {
    username?: string;
    password?: string;
}

export function SignUpComp() {
    const [signUpData, setLogInData] = useState<SignUpValues>({})
    let success = true;

    const handleSubmit = async () => {
        let users: any[] = [];
        const querySnapshot = await getDocs(collection(db, "Users"));
        querySnapshot.forEach((doc) => {
            users.push(doc.data())
        });
        success = true
        users.forEach((user) => {
            console.log(user.username, signUpData.username);

            if (user.username === signUpData.username && user.password === signUpData.password) {
                alert('That account already exists')
                success = false
            }
        })
        if (success) {
            console.log('worked');
            try {
                const docRef = await addDoc(collection(db, "Users"), {
                    username: `${signUpData.username}`,
                    password: `${signUpData.password}`,
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    }

    const handleChange = ({ target: { value, name } }: any) => {
        setLogInData({ ...signUpData, [name]: value })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>Username</label>
                <input onChange={handleChange} placeholder="username" name="username" />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input type="password" onChange={handleChange} placeholder="Password" name="password" />
            </Form.Field>
            <Button type="submit">Sign Up</Button>
        </Form>
    )
}