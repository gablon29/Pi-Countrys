import React from 'react'
import './Home.css'
import Cards from '../cards/Cards'
import Navbar from '../navbar/Navbar'

const Home = () => {
  return (
      <div className='divHome'>
      <Navbar/>
      <Cards/>
    </div>
  )
}

export default Home
