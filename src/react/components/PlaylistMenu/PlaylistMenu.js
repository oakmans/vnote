import React from 'react';
import YTSearch from 'youtube-api-search';
import { slide as Menu } from 'react-burger-menu'
import { Navbar, Form, FormControl, Button, Dropdown, DropdownButton, Container } from 'react-bootstrap';


export class PlaylistMenu extends React.Component {
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
            this.setState({
                videos: videos
            })
        })
    }

    render() {
        return (
            <Menu right width={ '20%' }>
                <div>
                    <DropdownButton id='dropdown-item-button' variant='danger' title={this.state.player} className="btn-block w-100">
                        <Dropdown.Item><div onClick={(e) => this.changePlayer(e.target.textContent)}>Youtube</div></Dropdown.Item>
                        <Dropdown.Item><div onClick={(e) => this.changePlayer(e.target.textContent)}>Vimeo</div></Dropdown.Item>
                        <Dropdown.Item><div onClick={(e) => this.changePlayer(e.target.textContent)}>Twitch</div></Dropdown.Item>
                    </DropdownButton>
                </div>
                <Form inline>
                    <FormControl ref = {this.term} type="text" placeholder="Search"/>
                    <Button type="button" onClick={() => this.search(this.term.current.value)}>Submit</Button>
                </Form>
                <Container className="bg-white justify-content-between">
                    <div className="media">
                        <p>Placeholder Item 1</p>
                    </div>
                    <div className="media">
                        <p>Placeholder Item 1</p>
                    </div>
                    <div className="media">
                        <p>Placeholder Item 1</p>
                    </div>
                    <div className="media">
                        <p>Placeholder Item 1</p>
                    </div>
                    <div className="media">
                        <p>Placeholder Item 1</p>
                    </div>
                </Container>
            </Menu>
        )
    }

}
