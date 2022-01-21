//https://images-api.nasa.gov/search?q={q}

import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";

export function SearchAPI(props: any) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setItems] = useState({});

    let year = props.data.year
    let month = props.data.month
    let day = props.data.day

    useEffect(() => {
        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${year}-${month}-${day}&end_date=${year}-${month}-${day}&api_key=zXuu0a69xd8M3vyEJWURzxgSKDETAoioniuWN2pc`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.near_earth_objects[`${year}-${month}-${day}`]);

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
        return <Container textAlign="center"><div>Loading...</div></Container>;
    } else {
        let arr = Object.assign([], data)
        let len = arr.length
        console.log(arr);
        arr.forEach((item: any) => {
            console.log(item.neo_reference_id);

        })

        return (
            <Container>
                <div>{len}</div>
                {arr.map((item: any, index) => {
                    <h5 key={index}>{item.neo_reference_id}</h5>
                })}
            </Container>
        )
    }

}
