import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import ReactPlayer from 'react-player/youtube'
import { channels } from '../shared/constants'
// import { Html5vid } from './components/Html5vid'
import { Navheader } from './components/Navheader'
import { Pell } from './components/Pell'
import {Html5vid} from "./components/Html5vid";
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
      <div className="container-fluid p-0">
          <div className="row">
              <div className="col-md-8">
                <Navheader/>
              </div>
          </div>
          <div className="row">
              <div className="col-md-8">
                  <ReactPlayer
                    url='https://www.youtube.com/watch?v=YTYZsXYp1hs'
                    controls='true'
                    width='100%'
                  />
              </div>
          </div>
          <div className="row">
              <div className="col-md-8">
                  <Pell/>
              </div>
          </div>
      </div>
    );
  }
}


export default App;
