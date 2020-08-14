import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player/lazy';
import { channels } from '../shared/constants';
import { PlaylistMenu } from "./components/PlaylistMenu/PlaylistMenu";
import { Tinymce } from "./components/TinyMce/TinyMce"
import "./App.css"
const { ipcRenderer } = window


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: '',
      appVersion: '',
    };
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      const { appName, appVersion } = arg;
      this.setState({ appName, appVersion });
    });
  }

  render() {
    const { appName, appVersion } = this.state;
    return (
      <div id="App" className="contianer-fluid p-2">
        <row>
          <PlaylistMenu />
        </row>
        <row>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=odtAJ2kPdqc&t=1s'
            height="68%"
            width="100%"
            controls='true'
          /> 
        </row>
        <row>
          <div  className="h-29">
          <Tinymce/>
          </div>        
        </row>
      </div>
    );
  }
}

export default App;
