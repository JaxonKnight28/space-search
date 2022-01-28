import { useState, useEffect, useContext } from "react";
import { Button, Container, Image } from 'semantic-ui-react'
import { SaveImage } from "../../components/handleImages.com";
import UserContext from "../../components/user-context";

export function PhotoOfTheDay() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setItems] = useState<any>([]);
    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=zXuu0a69xd8M3vyEJWURzxgSKDETAoioniuWN2pc")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
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
        if (data.media_type === 'image') {
            return (
                <Container textAlign="center">
                    <div className="ui hidden divider"></div>
                    <h1>Astronomy Picture of the Day (APOD)</h1>
                    <div className="ui divider"></div>
                    <h1>{data.title}</h1>
                    <Image src={data.hdurl} alt={data.url} />
                    <div className="ui hidden divider"></div>
                    <p>{data.explanation}</p>
                    <div className="ui hidden divider"></div>
                    {user ? <Button onClick={() => SaveImage(`${data.hdurl}`)} color="blue">Save Image</Button> : null}
                    <div className="ui hidden divider"></div>
                </Container>
            );
        } else {
            return (
                <Container textAlign="center">
                    <div className="ui hidden divider"></div>
                    <h1>Astronomy Picture of the Day (APOD)</h1>
                    <div className="ui divider"></div>
                    <h1>{data.title}</h1>
                    <iframe width="560" height="315" src={data.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div className="ui hidden divider"></div>
                    <p>{data.explanation}</p>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                </Container>
            )
        }
    }
}
