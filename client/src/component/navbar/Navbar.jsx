import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
<nav>
<div>
  <ul className='navbarStyle'>
          <Link to= '/'>
            <li><a href="#">Inicio</a></li>
          </Link>
          <Link to= '/Home'>
            <li><a href="#">Home</a></li>
          </Link>
          <Link to= '/activity'>
            <li><a href="#">Crear Actividad</a></li>
          </Link>
          <Link to= '/activities'>
            <li><a href="#">Actividades</a></li>
          </Link>
    
    <li>
    </li>
  </ul>
    </div>
</nav>
  )
}

export default Navbar
