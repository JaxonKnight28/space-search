import { useState } from "react";
import { useNavigate } from "react-router";
import { Container } from "semantic-ui-react";
import { Login, LoginValues } from "../../components/login.com";
import users from '../../dataLayers/users.json';

export function LoginView() {

    return (
        <Container style={{ width: 400, margin: 48 }}>
            <h2>Login with an existing account</h2>
            <Login />
        </Container>
    )
}