import React from 'react';
import { ListGroup } from 'react-bootstrap'

export class Searchlist extends React.Component {
    constructor(props) {
        super(props)
        this.populateList = this.populateList.bind(this)
    }

    populateList(items) {
        let result = ''
        for(let item in items) {
            if(items.hasOwnProperty(item)) {
                result = result + `<ListGroup.Item>${items[item]['id']['videoId']}</ListGroup.Item>`
            }
        }
        return result
    }

    render() {
        return (
            <ListGroup>
                {this.populateList(this.props.videosFromParent)}
            </ListGroup>
        )
    }
}