import React from 'react'
import { useState, useEffect } from 'react';
import { getActivities, getCountries, postActivities,} from '../../../redux/actions';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validation } from './validation';
import NavBar from '../../navbar/Navbar'

const ActivitisCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    Nombre: '',
    Dificultad: '',
    Duracion: '',
    Temporada: '',
    countryid: [],
  })
  useEffect(() => {
    dispatch(getActivities())
    dispatch(getCountries())
  }, [dispatch]);
  
  const countries = useSelector((state) => state.allCountries)
  const handleChange = (evento) => {
    setInput({
      ...input,
      [evento.target.name]: evento.target.value
    });
    console.log(input)
    setErrors(validation({
      ...input,
      [evento.target.name]: evento.target.value
    },errors));
  }

  const handleDelete = (id) => {
    setInput({
      ...input,
      countryid: input.countryid.filter((country => country !== id))
    })
  }
  
  const handleSelect = (evento) => {
    setInput({
      ...input,
      countryid: [...input.countryid, evento.target.value]
    })
  }

  const handleSubmit = (evento) => {
    evento.preventDefault();
    // if (errors)
    //   return alert('Debes completar todos los campos');
    dispatch(postActivities(input));
    alert('Actividad creada con exito campeon')
    setInput({
      Nombre: '',
      Dificultad: '',
      Duracion: '',
      Temporada: '',
      countryid: [],
    });
    history.push('/Home')
  }

  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div>
        <form className='activity_form' onSubmit={handleSubmit}>
          <h4>Create your Activity</h4>
          <div>
            <label>Actividad</label>
            <input type='text' 
              placeholder='Nombre de la actividad'
              name='Nombre'
              onChange={handleChange}
              value={input.Nombre}
            />
            
          </div>
          <div>
            <label>Dificultad</label>
            <input type='range' 
              placeholder='Escribe la dificultad del 1 al 5'
              value={input.Dificultad}
              name='Dificultad'
              min='1'
              max='5'
              onChange={evento => handleChange(evento)}
            />
          </div>
          <div>
            <label>Duracion</label>
            <input type='text' 
              placeholder='Duracion promedio de tu actividad'
              value={input.Duracion}
              name='Duracion'
              onChange={handleChange}
            />
          </div>
          <div>
            <select name='Temporada'
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
            <select onChange={(evento) => handleSelect(evento)}>
              <option>contruis</option>
              {
                countries.map(country => (
                  <option value={country.Nombre}>{country.Nombre}</option>
                ))
              }
            </select>
          </div>
          <div>
            {input.countryid.map(country => (
              <div>
                <input type='button' value='X' onClick={() => handleDelete(country)} />
                <p>{country}</p>
              </div>
            ))}
          </div>
          <div>
            <button type='submit'>Crear Actividad</button>
              </div>
        </form>
      </div>
    </div>
  )
}

export default ActivitisCreate