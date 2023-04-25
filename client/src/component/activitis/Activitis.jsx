import React from 'react'
import './activityList/ActivityList'
import styled from 'styled-components'
import './activityList/ActivityList'
import { Link } from "react-router-dom";
import './Activiti.css'

const Activitis = ({Nombre, Duracion, Temporada, Dificultad, Countries}) => {

  const Conteiner = styled.div`
  width: 100%;
  padding: 0px;
  text-align: center;
  margin: 2px;
  background-color: white;
  display: block;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  `;
  const Text = styled.h1`
  color: black;`;
  return (
    <Conteiner>
          <Text>{Nombre}</Text>
          <h3>Duracion: {Duracion}</h3>
          <h3>Temporada: {Temporada}</h3>
          <h3>Dificultad: {Dificultad}</h3>
      {Countries.map(({ID, Nombre }) => (
       <h3>
        <Link className='style_link' to={`/Home/${ID}`}>
        {Nombre}
        </Link>
        </h3>
      ))}
    </Conteiner>
  )
}

export default Activitis
