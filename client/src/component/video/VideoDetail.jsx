import React from 'react'
import myVideo from '../../img/paisajeDos.mp4';
import './videoBackgroundInico.css'
import { useState } from 'react';
import styled from 'styled-components';
import Spinner from './Spinner'

const VideoDetail = () => {
  
  const [loading, setLoading] = useState(false);

  const handleVideoLoad = () => {
    setLoading(true);
  }
  const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;`;

  return (
    <>
      {!loading && <Spinner />}
      <div id='video_background'>
          <Video autoPlay muted loop id='myEarch' playbackRate={4} onLoadedData={handleVideoLoad}>
            <source src={myVideo} type='video/mp4'/>
      </Video>
      </div>
        </>
    
  )
}

export default VideoDetail