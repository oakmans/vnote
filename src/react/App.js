import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactPlayer from 'react-player/youtube'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { channels } from '../shared/constants'
import { Navheader } from './components/Navheader'
import { Pell } from './components/Pell'
import {Searchlist} from "./components/Searchlist";
const { ipcRenderer } = window



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: '',
      appVersion: '',
      videos: []
    };
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      const { appName, appVersion } = arg;
      this.setState({ appName, appVersion });
    });
  }

  populateVideos(videos) {
      this.setState({
          videos: videos
      })
      console.log(this.state.videos)
  }

  render(){
    const { appName, appVersion } = this.state;
    return (
      <div className="container-fluid p-0">
          <div className="row">
              <div className="col-md-8">
                <Navheader videosToParent={this.populateVideos.bind(this)}/>
              </div>
          </div>
          <div className="row">
              <div className="col-md-8">
                  <ReactPlayer
                    url='https://www.youtube.com/watch?v=YTYZsXYp1hs'
                    light=''
                    controls='true'
                    width='100%'
                  />
              </div>
              <div className="col-md-8">
                  <Searchlist videosFromParent={this.state.videos}/>
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
