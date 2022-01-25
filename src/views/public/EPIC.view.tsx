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
            <div className="ui hidden divider"></div>
            <Container textAlign="center">
                <h1>Earth Polychromatic Imaging Camera (EPIC)</h1>
            </Container>
            <Form onSubmit={handleSubmit}>
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
                    <label>Day</label>
                    <select className="ui dropdown fluid" name="day" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Year</label>
                    <input placeholder="Year" name="year" onChange={handleChange} />
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
            {newData ? null :
                <>
                    <h4>Examples:</h4>
                    <p>October 10th 2018, A category 5 hurricane hit Florida</p>
                    <p></p>
                </>
            }
        </Container>
    )
}