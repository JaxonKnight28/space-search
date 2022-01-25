import { useState, useEffect, useContext } from "react";
import { Button, Container } from 'semantic-ui-react'
import { SaveImage } from "../../components/saveImage.com";
import UserContext from "../../components/user-context";
import { SavedImages } from "../private/saved.view";


// api key: zXuu0a69xd8M3vyEJWURzxgSKDETAoioniuWN2pc
export function PhotoOfTheDay() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setItems] = useState<any>([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=zXuu0a69xd8M3vyEJWURzxgSKDETAoioniuWN2pc")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const { user, setUser } = useContext(UserContext);

    if (error) {
        return <div>Error: {error['message']}</div>;
    } else if (!isLoaded) {
        return <Container textAlign="center"><div>Loading...</div></Container>;
    } else {
        return (
            <Container textAlign="center">
                <div className="ui hidden divider"></div>
                <h1>Photo of the day</h1>

                <div className="ui divider"></div>
                <h1>{data.title}</h1>
                <img src={data.url} alt="" />
                <div className="ui hidden divider"></div>
                <p>{data.explanation}</p>
                <div className="ui hidden divider"></div>
                {user ? <Button onClick={() => SaveImage(`${data.url}`)} color="blue">Save Image</Button> : null}
                <div className="ui hidden divider"></div>
            </Container>

        );
    }
}
