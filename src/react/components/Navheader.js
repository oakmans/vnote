import React from 'react'
import YTSearch from 'youtube-api-search'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'

export class Navheader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: []
        }
        this.term = React.createRef()
        this.search = this.search.bind(this)
    }

    search(term) {
        YTSearch({key: 'placeholder', term: term}, (videos) => {
            this.setState({
                videos: videos
            })
        })
    }

    render() {
        return (
            <Navbar className="bg-light justify-content-between">
                <Form inline>
                    <FormControl ref = {this.term} type="text" placeholder="Search" className=" mr-sm-2" />
                    <Button type="button" onClick={() => this.search(this.term.current.value)}>Submit</Button>
                </Form>
            </Navbar>
        )
    }
}