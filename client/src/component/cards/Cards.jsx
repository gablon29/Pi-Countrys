import React from 'react';
import Card from '../card/Card';
import { Link } from "react-router-dom";
import { filterByContinent, getActivities, getCountries, orderByName, orderByPopulation } from '../../redux/actions';
import {NUMEROUS_COUNTRYS, LESS_NUMEROUS, POPULATION} from '../../redux/constantes'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Paginado from '../paginado/Paginado';
import './Cards.css'

const Cards = () => {
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.countries)

  const [page, setPage] = useState(1);
  const [countryPerPage] = useState(10);
  const lastCountry = page * countryPerPage;
  const firstCountry = lastCountry - countryPerPage;
  const currentCountry = countries.slice(firstCountry, lastCountry);
  const [, setOrden] = useState('')
  
  const paginado = (pageNumber) => {
    setPage(pageNumber)
  };
  const btnReload = (evento) => {
    evento.preventDefault()
    dispatch(getCountries())
  };

  const handleFilterContinent = (evento) => {
    evento.preventDefault()
    dispatch(filterByContinent(evento.target.value))
    setPage(1)
  }

  const handleSort = (evento) => {
    evento.preventDefault()
    dispatch(orderByName(evento.target.value))
    setPage(1)
    setOrden(`Ordenado ${evento.target.value}`)
  }

  const handleSortPopulation = (evento) => {
    evento.preventDefault();
    dispatch(orderByPopulation(evento.target.value));
    setPage(1);
    setOrden(`Ordenado ${evento.target.value}`);
  }
    
  useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities())
  }, [dispatch]);
  return (
    <div className='divContenedorCar'>
      <div>
        <button id='home_btn' onClick={(evento) => btnReload(evento)}>Recargar</button>
        <select className='filtrado' onChange={(evento) => handleFilterContinent(evento)}>
          <option>Todos</option>
          <option>South America</option>
          <option>North America</option>
          <option>Asia</option>
          <option>Africa</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
        
        <select className='filtrado' onChange={evento => handleSort(evento)}>
          <option>Todos</option>
          <option>A - Z</option>
        </select>
        <select className='filtrado' onChange={evento => handleSortPopulation(evento)}>
          <option value={POPULATION}>Popularidad</option>
          <option value={NUMEROUS_COUNTRYS}>Mas Populares</option>
          <option value={LESS_NUMEROUS}>Menos Populares</option>
        </select>
        <Paginado countryPerPage={countryPerPage} 
          countries={countries.length}
          paginado={paginado}
        />
        
      </div>
          {
              currentCountry?.map(({ ID, Nombre, Bandera, Continente, Capital, Poblacion }) => {
              return (
                <div className='conteiner' key={ID}>
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
