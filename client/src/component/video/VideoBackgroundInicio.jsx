import React from 'react';
import myVideo from '../../img/video.mp4';
import './videoBackgroundInico.css'
import { Link } from "react-router-dom";



const VideoBackgroundInicio = () => {

  return (
       <div id='video_background'>
          <video autoPlay muted loop id='myEarch'>
            <source src={myVideo} type='video/mp4'/>
          </video>
          <div className='content'>
            <h1>Bienvenido!</h1>
            <p>Listo para encontrar las maravillas que puede mostrarte <br/>
              nuestro hermoso y abundante planeta ?</p>
            <p>Disfruta de esta increible aplicacion, donde podras encontrar<br />
            los mejores lugares y actividades que puede brindarte nuestra madre Tierra</p>
        <Link to={'/Home'}>
        <button className='home-btn'>Welcome</button>
        </Link>
      </div>
        </div>
    
  )
}

export default VideoBackgroundInicio
