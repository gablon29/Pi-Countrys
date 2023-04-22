import React from 'react';
import myVideo from '../../img/video.mp4';
import './videoBackgroundInico.css'


const VideoDetailDos = () => {

  return (
       <div id='video_background'>
          <video autoPlay muted loop id='myEarch'>
            <source src={myVideo} type='video/mp4'/>
          </video>
        </div>
    
  )
}

export default VideoDetailDos
