import React, { Component, RefObject } from 'react';
import { StreamManager } from 'openvidu-browser';
import { styled } from 'styled-components';

interface OpenViduVideoProps {
  streamManager: StreamManager;
}
  let MidBox = styled.div`
    width: 100%;
    height: 80%;
    display:flex;
    border-top-left-radius: 3vh;
    border-top-right-radius: 3vh;
    background-color: white;
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    
  `;


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
        <MidBox>
          <video autoPlay ref={this.videoRef} style={{width:'100%', height:'100%', borderTopLeftRadius:'inherit', borderTopRightRadius:'inherit'}}/>
        </MidBox>
    );
  }
}
