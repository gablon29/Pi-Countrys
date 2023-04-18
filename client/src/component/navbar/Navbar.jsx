import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
<nav>
<div>
  <ul className='navbarStyle'>
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Acerca de</a></li>
    <li><a href="#">Contacto</a></li>
    <li>
        <input type="text" name="buscar" placeholder="Buscar"/>
        <button type="submit">Buscar</button>
    </li>
  </ul>
          
    </div>
</nav>
  )
}

export default Navbar
