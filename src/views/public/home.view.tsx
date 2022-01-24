import { Container } from "semantic-ui-react";

export function HomePage() {
    return (
        <Container textAlign="center">
            <h1>Space Search</h1>
            <Container textAlign="left">
                <h2>Account Instructions:</h2>
                <h4>1. Navigate to 'Account' page</h4>
                <h4>2. Select 'Create new Account' if you do not have an account created or select 'Login with Google' if you have already made an account</h4>
                <h4>3. After creating an account you can view images from any page and click the 'Save' button next to an image to save them</h4>
                <h4>You can view your saved images under the 'Saved Images' page</h4>
            </Container>
            <div className="ui hidden divider"></div>
            <Container textAlign="left">
                <h2>Photo of the day:</h2>
                <h4>One of NASA's API is called APOD (Astronomy Picture of the Day) </h4>
                <h4>Each day there is a new photo from NASA related to Astronomy along with a description of what the picture is.</h4>
                <h4>Below the image description there is a button to save the current day's image</h4>
            </Container>
            <div className="ui hidden divider"></div>
            <Container textAlign="left">
                <h2>EPIC</h2>
                <h4>These are images taken from DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument</h4>
                <h4>You can enter any date and this API will display pictures of earth from that day</h4>
            </Container>


        </Container>
    )
}