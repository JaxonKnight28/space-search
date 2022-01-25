import { useState } from "react";
import { useNavigate } from "react-router";
import { Container } from "semantic-ui-react";
import { SignUpComp, SignUpValues } from "../../components/signUp.com";


export function SignUp() {

    return (
        <Container style={{ width: 700 }}>
            <SignUpComp />
        </Container >
    )
}