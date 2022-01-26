import { useState } from "react";
import { Button, Container, Form } from "semantic-ui-react"
import { Rovers } from "../../components/rover.comp";


export type SearchFormValues = {
    year?: string;
    month?: string;
    day?: string;
    rover?: string;
}

export function SearchRover() {
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
        <Container >
            <div className="ui hidden divider"></div>
            <Container textAlign="center">
                <h1>Mars Rovers</h1>
            </Container>

            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Month</label>
                    <select className="ui dropdown fluid" name="month" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Day</label>
                    <select className="ui dropdown fluid" name="day" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
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
                    <select className="ui dropdown fluid" name="year" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                    </select>
                </Form.Field>

                <Form.Field>
                    <label>Rover</label>
                    <select className="ui dropdown fluid" name="rover" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="curiosity">Curiosity</option>
                        <option value="opportunity">Opportunity</option>
                        <option value="spirit">Spirit</option>
                    </select>
                </Form.Field>



                <Button type="submit">Search</Button>
            </Form>
            {newData && <Rovers data={searchData} />}
            {newData ? null :
                <>
                    <h4>Examples:</h4>
                    <p>Jan 1st 2022, Curiosity</p>
                    <p>May 1st 2009, Spirit (This is when Rover Spirit got stuck in the 'sand trap')</p>
                    <p>Jun. 11, 2018, Opportunity (This is the last photo Opportunity sent before loosing contact with earth. Sand storm prevented solar charging)</p>
                    <p>Jan. 5, 2004 Spirit (First photos from a Mars rover)</p>
                    <h5>Sprit's life: (Aug. 6, 2012 - Today)</h5>
                    <h5>Opportunity's life: (Jan. 26, 2004 — Jun. 11, 2018)</h5>
                    <h5>Spirit's life: (Jan. 5, 2004 — Mar. 21, 2010)</h5>
                    <p></p>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                </>
            }

        </Container >
    )
}