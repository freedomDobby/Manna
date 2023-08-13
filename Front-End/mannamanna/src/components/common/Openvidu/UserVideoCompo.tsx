import { Component } from 'react';
import { StreamManager } from 'openvidu-browser';
import OpenViduVideoComponent from './OvVideo';

interface UserVideoProps {
  streamManager?: StreamManager;
}

export class BlindDateParter extends Component< UserVideoProps > {
  getNicknameTag() {
    return JSON.parse(this.props.streamManager?.stream.connection.data || '').clientData;
  }

  render() {
    return (
      <div style={{width:'95%', height:'95%', marginLeft: '2.5%', marginTop: '1%'}}>
        {this.props.streamManager !== undefined ? (
            <OpenViduVideoComponent streamManager={this.props.streamManager}/>
        ) : null}
      </div>
    );
  }
}

export class BlindDateMyVideo extends Component< UserVideoProps > {
  getNicknameTag() {
    return JSON.parse(this.props.streamManager?.stream.connection.data || '').clientData;
  }

  render() {
    return (
      <div style={{width:'95%', height:'95%', marginLeft: '2.5%'}}>
        {this.props.streamManager !== undefined ? (
            <OpenViduVideoComponent streamManager={this.props.streamManager}/>
        ) : null}
      </div>
    );
  }
}

