import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
<nav>
<div>
  <ul className='navbarStyle'>
          <Link to= '/'>
            <li><p>Inicio</p></li>
          </Link>
          <Link to= '/Home'>
            <li><p>Home</p></li>
          </Link>
          <Link to= '/activity'>
            <li><p>Crear Actividad</p></li>
          </Link>
          <Link to= '/activities'>
            <li><p>Actividades</p></li>
          </Link>
    
    <li>
    </li>
  </ul>
    </div>
</nav>
  )
}

export default Navbar
