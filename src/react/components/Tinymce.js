import React from 'react';
import TinyMCE from 'react-tinymce';

export class Tinymce extends React.Component {
    constructor(props) {
        super(props)
    }

    handleEditorChange(e) {
        console.log(e.target.getContent());
    }

    render() {
        return (
            <TinyMCE
                content="<p>This is the initial content of the editor</p>"
                config={{
                    plugins: 'autolink link image lists print preview',
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
                }}
                onChange={this.handleEditorChange}
            />
        );
    }
}