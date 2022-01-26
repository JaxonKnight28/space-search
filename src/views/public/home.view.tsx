import { Container } from "semantic-ui-react";

export function HomePage() {
    return (
        <Container textAlign="center">
            <div className="ui hidden divider"></div>
            {/* <h1>Space Search</h1> */}
            <img style={{ width: 200 }} src={process.env.PUBLIC_URL + '/Space-Search-Image.png'} alt="" />
            <Container textAlign="left">
                <h2>Account Instructions:</h2>
                <h4>1. Navigate to 'Account' page</h4>
                <h4>2. Select 'Create new Account with Google' if you do not have an account created or select 'Login with Google' if you have already made an account</h4>
                <h4>3. After creating an account you can view images from any page and click the 'Save' button next to an image to save them</h4>
                <h4>You can view your saved images under the 'Saved Images' page</h4>
                <h4>NOTE: You may look at any images without an account but you won't be able to save them</h4>
            </Container>
            <div className="ui divider"></div>
            <Container textAlign="left">
                <h2>Picture of the day:</h2>
                <h4>One of NASA's API is called APOD (Astronomy Picture of the Day) </h4>
                <h4>Each day there is a new picture from NASA related to Astronomy along with a description of what the picture is.</h4>
                <h4>Below the image description there is a button to save the current day's image if you are signed in</h4>
                <h4>NOTE: Some days this API will return a youtube video</h4>
            </Container>
            <div className="ui divider"></div>
            <Container textAlign="left">
                <h2>EPIC</h2>
                <h4>These are images taken from DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument</h4>
                <h4>You can enter any date and this API will display pictures of earth from that day</h4>
                <h4>EPIC photos are available from Jun. 13, 2015 and on</h4>
            </Container>
            <div className="ui divider"></div>
            <Container textAlign="left">
                <h2>Rovers</h2>
                <h4>One of NASA's API's allows you to pick an earth date and a Mars rover. It will show all the pictures from that earth day if they exist</h4>
                <h4>Curiosity is currently the only NASA rover still sending photos (Aug. 6, 2012 - Today)</h4>
                <h4>Opportunity sent photos for 14 years (Jan. 26, 2004 — Jun. 11, 2018)</h4>
                <h4>Spirits' send photos for 7 years (Jan. 5, 2004 — Mar. 21, 2010)</h4>
            </Container>
            <div className="ui divider"></div>
            <Container textAlign="left">
                <h4>NOTE: There may be some days were no photos appear. This may be because the Rovers or Satellites were not able to send any that day. </h4>
            </Container>
            <div className="ui divider"></div>
            <div className="ui hidden divider"></div>
            <div className="ui hidden divider"></div>


        </Container>
    )
}