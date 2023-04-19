import React from 'react';
import './Navbar.css';
import SearchBar from '../searchBar/Search';



const Navbar = () => {
  return (
<nav>
<div>
  <ul className='navbarStyle'>
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Acerca de</a></li>
    <li><a href="#">Contacto</a></li>
    <li>
    </li>
  </ul>
          
    <SearchBar/>
    </div>
</nav>
  )
}

export default Navbar
