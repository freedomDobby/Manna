import React, { Component, RefObject } from 'react';
import { StreamManager } from 'openvidu-browser';

interface OpenViduVideoProps {
  streamManager: StreamManager;
}

export default class OpenViduVideoComponent extends Component<OpenViduVideoProps> {
  private videoRef: RefObject<HTMLVideoElement>;

  constructor(props: OpenViduVideoProps) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidUpdate(prevProps: OpenViduVideoProps) {
    if (prevProps && !!this.videoRef.current) {
      this.props.streamManager.addVideoElement(this.videoRef.current);
    }
  }

  componentDidMount() {
    if (this.props && !!this.videoRef.current) {
      this.props.streamManager.addVideoElement(this.videoRef.current);
    }
  }

  render() {
    return (
      <video autoPlay ref={this.videoRef} style={{width:'100%', height:'100%', borderRadius:'1rem'}}/>
    );
  }
}
