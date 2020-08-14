import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export class Tinymce extends React.Component {
    handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
    }

    render() {
        return (
            <Editor
                initialValue="<p>Start Typing here</p>"
                init={{
                    menubar: true,
                    apiKey:'nvmhzq81p4uokgqnxsvw3zzvjtxjndpy07uubnx47hl6uwpl',
                    height: 320,
                    plugins: [
                      'save advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount autosize'
                    ],
                    toolbar:
                      'save| undo redo | formatselect | bold italic backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      bullist numlist outdent indent | removeformat | help'
                  }}
                  onEditorChange={this.handleEditorChange}
            />
        );
    }
}