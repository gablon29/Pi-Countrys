import React from 'react'
import { useState, useEffect } from 'react';
import { getActivities, getCountries, postActivities,} from '../../../redux/actions';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validation, validationSubmit, validationArray } from './validation';
import NavBar from '../../navbar/Navbar'
import './ActivitiStilo.css'

const ActivitisCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    Nombre: '',
    Dificultad: '3',
    Duracion: '',
    Temporada: '',
    countryid: [],
  })
  useEffect(() => {
    dispatch(getActivities())
    dispatch(getCountries())
  }, [dispatch]);
  
  const countries = useSelector((state) => state.allCountries)
  const activity = useSelector(state => state.activitis)
  const handleChange = (evento) => {
    setInput({
      ...input,
      [evento.target.name]: evento.target.value
    });
    setErrors(validation({
      ...input,
      [evento.target.name]: evento.target.value
    }, errors, activity));
  }
  
  const handleDelete = (id) => {
    setInput({
      ...input,
      countryid: input.countryid.filter((country => country !== id))
    })
  }
  
  function handleSelect(evento) {
    const value = evento.target.value
    if (validationArray(value, input.countryid) !== undefined) {
      setInput({
        ...input,
        countryid: [...input.countryid, value]
      })
    } else return alert('Paise repetido')
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    if(!validationSubmit(errors))
      return alert('Debes completar todos los campos')
      dispatch(postActivities(input));
      alert('Actividad creada con exito')
      setInput({
        Nombre: '',
        Dificultad: '',
        Duracion: '',
        Temporada: '',
        countryid: [],
      });
      history.push('/Home')
  };
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <form className='activity_form' onSubmit={handleSubmit}>
          <h1 className='titulo_actividad'>Crea tu actividad</h1>
          <div>
            <label className='stylo_label'>Actividad</label>
            <input className='input_create'
              type='text' 
              placeholder='Nombre de la actividad'
              name='Nombre'
              onChange={handleChange}
              value={input.Nombre}
            />
          </div>
          {errors.Nombre && <p className='text_error'>{errors.Nombre}</p>}  

          <div>
            <label className='stylo_label'>Dificultad</label>
            <input className='input_create'
              type='range' 
              value={input.Dificultad}
              name='Dificultad'
              min='1'
              max='5'
              onChange={evento => handleChange(evento)}
            />
            <p className='text_range'>{input.Dificultad}</p>
             {errors.Dificultad && <p className='text_error'>{errors.Dificultad}</p>}
          </div>
          <div>
            <label className='stylo_label' >Duracion</label>
            <input className='input_create'
              type='text' 
              placeholder='Duracion promedio de tu actividad'
              value={input.Duracion}
              name='Duracion'
              onChange={handleChange}
            />
          </div>
            {errors.Duracion && <p className='text_error'>{errors.Duracion}</p>}
          <div>
            <select className='btn_select' name='Temporada'
              value={input.Temporada}
              onChange={(evento) => handleChange(evento)}
            >
            <option>Temporada</option>
            <option>Verano</option>
            <option>Otoño</option>
            <option>Invierno</option>
            <option>Primavera</option>
            </select>
          </div>
          <div>
            <select className='btn_select' onChange={(evento) => handleSelect(evento)}>
              {
                countries.map(country => (
                  <option key={country.ID} value={country.Nombre}>{country.Nombre}</option>
                ))
              }
            </select>
            
          </div>
          <div>
            {input.countryid.map(country => (
              <div>
                <input key={country} type='button' value='X' onClick={() => handleDelete(country)} />
                <p>{country}</p>
              </div>
            ))}
          </div>
          <div>
            <button className='btn_create' type='submit'>Crear Actividad</button>
              </div>
        </form>
      </div>
    </div>
  )
}

export default ActivitisCreate