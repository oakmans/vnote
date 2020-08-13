import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

export class Html5vid extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Video autoPlay loop muted
                   controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                   poster="http://sourceposter.jpg"
                   onCanPlayThrough={() => {
                       // Do stuff
                   }}>
                <source src="https://www.youtube.com/watch?v=YTYZsXYp1hs" type="video/webm"/>
                <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default/>
            </Video>
        );
    }

}