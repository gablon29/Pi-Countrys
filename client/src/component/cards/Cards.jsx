import React from 'react';
import Card from '../card/Card';
import { getCountries } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './Cards.css'

const Cards = () => {
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)
    
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);

  return (
    <div>
          {
              countries?.map(({ ID, Nombre, Bandera, Continente, Capital, Poblacion }) => {
              return (
          <div className='conteiner'>
                      <Card ID={ID}
                          Nombre={Nombre}
                          Bandera={Bandera}
                          Continente={Continente}
                          Capital={Capital}
                          Poblacion={Poblacion}
              />

          </div>
              )
              })
      }
    </div>
  );

}


export default Cards;
