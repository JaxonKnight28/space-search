import { useContext, useEffect, useState } from "react";
import { Button, Container, Image } from "semantic-ui-react";
import { SaveImage } from "./saveImage.com";
import UserContext from "./user-context";

export function EpicGetter(params: any) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setItems] = useState<any>([]);

    const year = params.data.year
    const month = params.data.month
    const day = params.data.day
    const quality = params.data.quality

    useEffect(() => {
        fetch(`https://epic.gsfc.nasa.gov/api/${quality}/date/${year}-${month}-${day}?api_key=zXuu0a69xd8M3vyEJWURzxgSKDETAoioniuWN2pc`)
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

        const arr = Object.assign([], data)
        const len = arr.length

        return (
            <Container textAlign="center">
                <h4>{len} photo(s) from {month}-{day}-{year} (mm-dd-yyy)</h4>
                <Container>
                    {arr.map((item: any, index: any) => (
                        <Container>
                            <Image key={item.identifier} src={`https://api.nasa.gov/EPIC/archive/${quality}/${year}/${month}/${day}/png/${item.image}.png?api_key=zXuu0a69xd8M3vyEJWURzxgSKDETAoioniuWN2pc`} />
                            <div className="ui hidden divider"></div>
                            {user ? <Button key={index} onClick={() => SaveImage(`https://api.nasa.gov/EPIC/archive/${quality}/${year}/${month}/${day}/png/${item.image}.png?api_key=zXuu0a69xd8M3vyEJWURzxgSKDETAoioniuWN2pc`)} color="blue">Save</Button> : null}
                            <div className="ui divider"></div>
                        </Container>
                    ))}
                </Container>
            </Container>

        );
    }
}