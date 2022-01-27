import { Container } from "semantic-ui-react";
import { Account } from "../../components/account.com";

export function SignUp() {
    return (
        <Container>
            <Account />
            <div className="ui hidden divider"></div>
        </Container >
    )
}