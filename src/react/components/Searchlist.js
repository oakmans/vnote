import React from 'react';

export class Searchlist extends React.Component {
    constructor(props) {
        super(props)
        this.populateList = this.populateList.bind(this)
    }

    populateList(items) {
        let result = '<ListGroup>'
        for(let item in items) {
            if(items.hasOwnProperty(item)) {
                result = result + `<ListGroupItem>${items[item]['id']['videoId']}</ListGroupItem>`
            }
        }
        result = result + '</ListGroup>'
        return result
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.populateList(this.props.videosFromParent) }} />
        );
    }
}