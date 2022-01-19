import { useState } from "react"
import { useNavigate } from "react-router";
import { Button, Form } from "semantic-ui-react"

//FIREBASE---------
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, addDoc } from "firebase/firestore"

const firebaseApp = initializeApp({
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

//set types
export type LoginValues = {
    username?: string;
    password?: string;
}

export function Login() {
    const [logInData, setLogInData] = useState<LoginValues>({})
    const navigate = useNavigate()
    let success = false;
    const handleSubmit = async () => {
        //firebase---
        let users: any[] = [];
        const querySnapshot = await getDocs(collection(db, "Users"));
        querySnapshot.forEach((doc) => {
            users.push(doc.data())
        });
        //firebase---
        success = false
        users.forEach((user) => {
            if (user.username === logInData.username && user.password === logInData.password) {
                success = true
                navigate('/')
            }
        })
        if (success === false) {
            alert('incorrect account')
        }
    }

    const handleChange = ({ target: { value, name } }: any) => {
        setLogInData({ ...logInData, [name]: value })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>Username/Email</label>
                <input onChange={handleChange} placeholder="username" name="username" />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input onChange={handleChange} type="password" placeholder="password" name="password" />
            </Form.Field>
            <Button type="submit">Sign In</Button>
        </Form>
    );
}