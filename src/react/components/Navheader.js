import React from 'react'
import YTSearch from 'youtube-api-search'
import { Navbar, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap'

export class Navheader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            player: "Youtube"
        }
        this.term = React.createRef()
        this.search = this.search.bind(this)
    }

    changePlayer(text) {
        this.setState({
            player: text
        })
    }

    search(term) {
        YTSearch({key: 'placeholder', term: term}, (videos) => {
            try {
                if( videos && videos.data && videos.data.error.message ) {
                    console.log(videos);
                    throw ('error')
                }
                this.props.videosToParent(videos)
            } catch (err) {
                //handle error with a modal
                console.log(err)
            }
        })
    }

    render() {
        return (
            <Navbar className="bg-dark justify-content-between">
                <DropdownButton id='dropdown-item-button' variant='danger' title={this.state.player}>
                    <Dropdown.Item><div onClick={(e) => this.changePlayer(e.target.textContent)}>Youtube</div></Dropdown.Item>
                    <Dropdown.Item><div onClick={(e) => this.changePlayer(e.target.textContent)}>Vimeo</div></Dropdown.Item>
                    <Dropdown.Item><div onClick={(e) => this.changePlayer(e.target.textContent)}>Twitch</div></Dropdown.Item>
                </DropdownButton>
                <Form inline>
                    <FormControl ref = {this.term} type="text" placeholder="" className=" mr-sm-2" />
                    <Button type="button" onClick={() => this.search(this.term.current.value)}>Search</Button>
                </Form>
            </Navbar>
        )
    }
}