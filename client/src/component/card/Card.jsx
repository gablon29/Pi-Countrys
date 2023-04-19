import React from 'react';
import './Card.css'

const Card = ({Nombre, Bandera, Continente}) => {
  return (
    
    
    <div className='cards'>
      <img src={Bandera} alt={Nombre}/>
      <div className='divTexts'>
          <h4>{Nombre}</h4>
          <h6>{Continente}</h6>
      </div>
    </div>

)
}

export default Card;

    

