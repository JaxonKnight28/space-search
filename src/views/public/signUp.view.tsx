import { useState } from "react";
import { useNavigate } from "react-router";
import { Container } from "semantic-ui-react";
import { SignUpComp, SignUpValues } from "../../components/signUp.com";


export function SignUp() {

    return (
        <Container style={{ width: 400, margin: 48 }}>
            <h2>Create an Account</h2>
            <SignUpComp />
        </Container>
    )
}