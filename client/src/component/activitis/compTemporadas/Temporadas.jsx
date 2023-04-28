import React, { useState } from 'react';

const Temporadas = ({handlechange}) => {

    const handleChangeTemporada = (evento) => {
        const prop = 'Temporada';
        const value = evento.target.value;
        handlechange(prop, value)
    }

  return (
    <div>
      <select className='btn_select' name='Temporada'
              onChange={handleChangeTemporada}
              handlechange={handlechange}
            >
            <option>Temporada</option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
            </select>
    </div>
  )
}

export default Temporadas
