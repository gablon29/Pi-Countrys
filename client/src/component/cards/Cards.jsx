import React from 'react';
import Card from '../card/Card';
import { Link } from "react-router-dom";
import { filterByContinent, getCountries } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './Cards.css'

const Cards = () => {
    const dispatch = useDispatch()
  const countries = useSelector((state) => state.countries)
  
  const handleFilterContinent = (evento) => {
    evento.preventDefault()
    dispatch(filterByContinent(evento.target.value))
  }
    
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);

  return (
    <div className='divContenedorCar'>
      <div>
        <select className='filtrado' onChange={(evento) => handleFilterContinent(evento)}>
          <option>Todos</option>
          <option>South America</option>
          <option>North America</option>
          <option>Asia</option>
          <option>Africa</option>
          <option>Europe</option>
          <option>Oceania</option>
          </select>
      </div>
          {
              countries?.map(({ ID, Nombre, Bandera, Continente, Capital, Poblacion }) => {
              return (
                <div className='conteiner'>
                  <Link className='link' to={`/Home/${ID}`}>
                      <Card ID={ID}
                          Nombre={Nombre}
                          Bandera={Bandera}
                          Continente={Continente}
                          Capital={Capital}
                          Poblacion={Poblacion}
              />
            </Link>
          </div>
              )
              })
      }
    </div>
  );

}


export default Cards;
