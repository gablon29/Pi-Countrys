import React from 'react';
import Card from '../card/Card';
import { Link } from "react-router-dom";
import { filterByContinent, getActivities, getCountries, orderByName, orderByPopulation } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Paginado from '../paginado/Paginado';
import './Cards.css'
import SearchBar from '../searchBar/Search';
import SelectContinent from './selectComp/SelectContinent';
import SelectOrder from './selectComp/SelectOrder';

const Cards = () => {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)

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
    setPage(1)
  };
  
  const functsearch = () => {
    setPage(1)
  }
  
  const handle_filter_continent = (evento) => {
    dispatch(filterByContinent(evento))
    setPage(1)
  }
  
  const handle_sort = (evento) => {
    dispatch(orderByName(evento))
    setPage(1)
    setOrden(`Ordenado ${evento}`)
  }
  
  const handle_sort_population = (evento) => {
    dispatch(orderByPopulation(evento));
    setPage(1)
    setOrden(`Ordenado ${evento}`);
  }
  
  useEffect(() => {
  dispatch(getCountries())
    dispatch(getActivities())
  }, [dispatch]);
  

  return (
    <div className='divContenedorCar'>
      <SearchBar functsearch={functsearch} />
      <div>
        <button id='home_btn' onClick={(evento) => btnReload(evento)}>Recargar</button>
        <SelectContinent handle_filter_continent={handle_filter_continent} />
        
        <SelectOrder handle_sort={handle_sort} 
          handle_sort_population={handle_sort_population}
        />

      </div>
        <Paginado countryPerPage={countryPerPage} 
          countries={countries.length}
          paginado={paginado}
        />
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
      <h1>Pagina actual: {page}</h1>
    </div>
  );

}


export default Cards;
