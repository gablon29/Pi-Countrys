import React from 'react'
import './Home.css'
import Cards from '../cards/Cards'
import Navbar from '../navbar/Navbar'
import SearchBar from '../searchBar/Search';
import VideoDetail from '../video/VideoDetail'

const Home = () => {
  return (
    <div className='divHome'>
      <VideoDetail/>
      <Navbar/>
      <SearchBar/>
      <Cards/>
    </div>
  )
}

export default Home
