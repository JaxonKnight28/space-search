import { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import users from '../dataLayers/users.json';
//import db from './firebaseFile'

export type SignUpValues = {
    username?: string;
    password?: string;
}

export function SignUpComp() {
    const [signUpData, setLogInData] = useState<SignUpValues>({})
    let success = true;
    const handleSubmit = () => {
        success = true
        users.forEach((user) => {
            if (user.username === signUpData.username && user.password === signUpData.password) {
                alert('That account already exists')
                success = false
            }
        })
        if (success) {
            console.log('worked');
            //console.log(db.collection("Users"));


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