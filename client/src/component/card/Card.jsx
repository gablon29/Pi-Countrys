import React from 'react';
import './Card'

const Card = ({ID, Nombre, Bandera, Continente, Capital, Poblacion }) => {
  return (
    <div className='cards'>
          <h2>Nombre: {Nombre}</h2>
          <img src={Bandera} alt={Nombre} width='20%'/>
          <h3>Capital: {Capital}</h3>
          <h3>Continente: {Continente}</h3>
          <h3>Poblacion: {Poblacion}</h3>
    </div>
  )
}

export default Card;
