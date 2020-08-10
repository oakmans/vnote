import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactPlayer from 'react-player/youtube'
import { channels } from '../shared/constants'
// import { Html5vid } from './components/Html5vid'
import { Tinymce } from './components/Tinymce';
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

  render(){
    const { appName, appVersion } = this.state;
    return (
        <div>
          <div className="row">
            <div className="col-md-10">
              <ReactPlayer url='https://www.youtube.com/watch?v=YTYZsXYp1hs' />
              {/*<Html5vid/>*/}
            </div>
          </div>
          <div className="row">
            <div className="col-md-10">
              <Tinymce/>
            </div>
          </div>
        </div>
    );
  }
}


export default App;
