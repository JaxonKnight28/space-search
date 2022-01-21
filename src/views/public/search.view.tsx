// https://images-api.nasa.gov/search?q=space
//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=zXuu0a69xd8M3vyEJWURzxgSKDETAoioniuWN2pc

import { useState } from "react";
import { Button, Container, Form } from "semantic-ui-react";
import { SearchAPI } from "../../components/search.com";


type SearchFormValue = {
    query?: string;
}
export function SearchPage() {


    const [searchQuery, setSearchData] = useState<SearchFormValue>({})
    const [newData, setNewData] = useState<boolean>(false)
    const handleSubmit = () => {
        setNewData(true)

    }

    const handleChange = ({ target: { value, name } }: any) => {
        setSearchData({ ...searchQuery, [name]: value })
        setNewData(false)
    }
    return (
        <Container>
            <h2>Here you can look up </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Year</label>
                    <input placeholder="Year" name="year" onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Month</label>
                    <select className="ui dropdown fluid" name="month" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="01">Jan</option>
                        <option value="02">Feb</option>
                        <option value="03">Mar</option>
                        <option value="04">Apr</option>
                        <option value="05">May</option>
                        <option value="06">Jun</option>
                        <option value="07">Jul</option>
                        <option value="08">Aug</option>
                        <option value="09">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Day (01)</label>
                    <input placeholder="Day" name="day" onChange={handleChange} />
                </Form.Field>

                <Button type="submit">Search</Button>
            </Form>
            {newData && <SearchAPI data={searchQuery} />}
        </Container >
    )
}
