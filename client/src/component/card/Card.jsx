import React from 'react';
import './Card.css'

const Card = ({ID, Nombre, Bandera, Continente, Capital, Poblacion }) => {
  return (
    
      <div className='cards'>
      <img src={Bandera} alt={Nombre}/>
      <div className='divTexts'>
          <h6>{Nombre}</h6>
          <h6>Capital:{Capital}</h6>
          <h6>{Continente}</h6>
          <p>Poblacion: {Poblacion}</p>
      </div>
    </div>

    

  )
}

export default Card;
