import { useState, useEffect } from "react";
import { Button, Container } from 'semantic-ui-react'
import { SaveImage } from "../../components/saveImage.com";
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


    if (error) {
        return <div>Error: {error['message']}</div>;
    } else if (!isLoaded) {
        return <Container textAlign="center"><div>Loading...</div></Container>;
    } else {
        return (
            <Container textAlign="center">
                {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
                <h3>NASA has an API called APOD (Astronomy Picture of the Day)</h3>
                <h3>Each day there is a new photo from NASA related to Astronomy along with a description of what the picture is.</h3>

                <div className="ui divider"></div>
                <h1>{data.title}</h1>
                <img src={data.url} alt="" />
                <div className="ui hidden divider"></div>
                <p>{data.explanation}</p>
                <div className="ui hidden divider"></div>
                <button onClick={() => SaveImage(`${data.url}`)}>test</button>
            </Container>

        );
    }
}
