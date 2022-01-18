import { useState } from "react"
import { useNavigate } from "react-router";
import { Button, Form } from "semantic-ui-react"
import users from '../dataLayers/users.json';

//set types
export type LoginValues = {
    username?: string;
    password?: string;
}

export function Login() {
    const [logInData, setLogInData] = useState<LoginValues>({})
    const navigate = useNavigate()
    let success = false;
    const handleSubmit = () => {
        success = false
        users.forEach((user) => {
            if (user.username === logInData.username && user.password === logInData.password) {
                console.log('works');
                success = true
                navigate('/')
            }
        })
        if (success == false) {
            alert('incorrect account')
            console.log('failed');
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