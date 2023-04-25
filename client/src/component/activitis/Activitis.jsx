import React from 'react'
import './activityList/ActivityList'
import './activityList/ActivityList'
import { Link } from "react-router-dom";
import './Activiti.css'

const Activitis = ({ID, Nombre, Duracion, Temporada, Dificultad, Countries}) => {

  return (
    <div className='coteiner_div_cards' key={ID}>
          <h1>{Nombre}</h1>
          <h3>Duracion: {Duracion}</h3>
          <h3>Temporada: {Temporada}</h3>
          <h3>Dificultad: {Dificultad}</h3>
      {Countries.map(({ID, Nombre }) => (
       <h3 key={ID}>
        <Link className='style_link' to={`/Home/${ID}`}>
        {Nombre}
        </Link>
        </h3>
      ))}
    </div>
  )
}

export default Activitis
