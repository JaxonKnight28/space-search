import { useState } from "react";
import { Container, Form, Button } from 'semantic-ui-react'
import { EpicGetter } from "../../components/epic.com";



type SearchFormValues = {
    year?: string;
    month?: string;
    day?: string;
    rover?: string;
}

export function EpicPhotoSearch() {
    const [searchData, setSearchData] = useState<SearchFormValues>({})
    const [newData, setNewData] = useState<boolean>(false)
    const handleSubmit = () => {
        setNewData(true)

    }

    const handleChange = ({ target: { value, name } }: any) => {
        setSearchData({ ...searchData, [name]: value })
        setNewData(false)
    }
    return (
        <Container>
            <h1>These are images taken from DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument</h1>
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
                <Form.Field>
                    <Form.Group grouped onChange={handleChange}>
                        <label>Quality</label>
                        <Form.Field
                            label='Enhanced'
                            control='input'
                            type='radio'
                            name='quality'
                            value='enhanced'
                        />
                        <Form.Field
                            label='Natural'
                            control='input'
                            type='radio'
                            name='quality'
                            value='natural'
                        />
                    </Form.Group>
                </Form.Field>

                <Button type="submit">Search</Button>
            </Form>
            {newData && <EpicGetter data={searchData} />}
        </Container>
    )
}