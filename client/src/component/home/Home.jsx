import React from 'react'
import './Home.css'
import Cards from '../cards/Cards'
import Navbar from '../navbar/Navbar'
import VideoDetail from '../video/VideoDetail'

const Home = () => {
  return (
    <div className='divHome'>
      <VideoDetail/>
      <Navbar/>
      <Cards/>
    </div>
  )
}

export default Home
