import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, resetDetail } from '../../redux/actions';
import './Detail.css'
import Navbar from '../navbar/Navbar'
import { Link } from "react-router-dom";
import VideoDetailDos from '../video/VideoDetailDos';

const Detail = (prop) => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetDetail())
        dispatch(getDetail(prop.match.params.id))
    }, [dispatch, prop.match.params.id])
    
    const countryDetail = useSelector((state) => state.detail)
    // const { Capital, Continente } = countryDetail[0];
  return (
    //   <div ID={countryDetail.ID} className='pageDetail'>
    <div className='divTotal'>
        <Navbar/>
          {countryDetail.length ? 
              <div className='divDetail'>
               { <VideoDetailDos/> ? <VideoDetailDos/> : <div>
                <h1>Loading...</h1>
                </div>}
                <div className='divBandera'>
                      <img src={countryDetail[0].Bandera} alt={countryDetail[0].Nombre}/>
                  </div>
                  <div className='divText'>
                  <h1>{countryDetail[0].Nombre}</h1> 
                  <h2>Acronimo:{countryDetail[0].ID}</h2>
                  <h2>Capital: {countryDetail[0].Capital}</h2>
                  <h2>Continente: {countryDetail[0].Continente}</h2>
                  <h2>Poblacion: {countryDetail[0].Poblacion}</h2>
                  <h2>Subregion: {countryDetail[0].Subregion}</h2>
                  <h2>Area: {countryDetail[0]?.Area}</h2>
                  <h2>Actividad:</h2>
                  {countryDetail[0]?.Activities?.map(({Nombre}) => (
                    <h2>{Nombre}</h2>
                  ))}
                  </div>
              </div> :
              <div>
                  <h1>Loading...</h1>
              </div>
              }
          
          </div>
      
    // </div>
  )
}

export default Detail
