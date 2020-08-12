import React from 'react';
import { init } from 'pell';
import 'pell/dist/pell.css'

export class Pell extends React.Component {
    constructor(props) {
        super(props);
        this.state = { html: null }
    }

    editor = null

    componentDidMount () {
        this.editor = init({
            element: document.getElementById('editor'),
            onChange: html => this.setState({ html }),
            actions: ['bold', 'underline', 'italic'],
        })
    }

    render() {
        return (
            <div className="Pell">
                <h3>Editor:</h3>
                <div id="editor" className="pell" />
            </div>
        );
    }
}