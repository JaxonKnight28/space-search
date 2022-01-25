import { useEffect, useState } from "react";
import { Button, Container, Image } from "semantic-ui-react";
import { SaveImage } from "./saveImage.com";


export function Rovers(props: any) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<any>([]);

    const year = props.data.year
    const month = props.data.month
    const day = props.data.day
    const rover = props.data.rover
    console.log(day);


    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${year}-${month}-${day}&api_key=zXuu0a69xd8M3vyEJWURzxgSKDETAoioniuWN2pc`)
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

    if (error) {
        return <div>Error: {error['message']}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        const arr = Object.assign([], items.photos)
        const len = arr.length

        return (
            <Container style={{ margin: 40 }} textAlign="center" fluid>
                <Container>
                    <h3>There are {len} photos(s) from Rover: {rover} on {month}-{day}-{year} (mm-dd-yyy)</h3>
                </Container>

                {arr.map((item: any, index: any) => (
                    <Container textAlign="center">
                        <Image key={item.id} src={item.img_src} />
                        <div className="ui hidden divider"></div>
                        <Button key={index} onClick={() => SaveImage(`${item.img_src}`)} color="blue">Save Image</Button>
                        <div className="ui divider"></div>
                    </Container>
                ))}
            </Container >
        );
    }
}