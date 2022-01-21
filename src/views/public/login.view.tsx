
import { Container } from "semantic-ui-react";
import { Login } from "../../components/login.com";

export function LoginView() {

    return (
        <Container style={{ width: 400, margin: 48 }}>
            <Login />
        </Container>
    )
}