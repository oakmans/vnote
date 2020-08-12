import React from 'react'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'

export class Navheader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            def: "Search"
        }
    }

    handleChange(event) {
        this.setState({
            def: event.target.value
        })
    }

    search() {

    }

    render() {
        return (
            <Navbar className="bg-light justify-content-between">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                    <Button type="submit" onClick={this.search()}>Submit</Button>
                </Form>
            </Navbar>
        )
    }
}