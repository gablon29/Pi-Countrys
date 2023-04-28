import React from 'react'
import { useState, useEffect } from 'react';
import { getActivities, getCountries, postActivities,} from '../../../redux/actions';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validation, validationSubmit, validationArray } from './validation';
import NavBar from '../../navbar/Navbar'
import './ActivitiStilo.css'
import Temporadas from '../compTemporadas/Temporadas';
import InputName from '../inputsComp/InputName';
import InputDifiult from '../inputsComp/InputDifiult';

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

  const handlechange = async (prop, value) => {
     setInput(input =>({
      ...input,
      [prop]: value
    }));
    setErrors(validation({
      ...input,
      [prop]: value
    }, errors, activity));
  }
  console.log(input);
  console.log(errors);
  
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
          <InputName handlechange={handlechange}/>
          {errors.Nombre && <p className='text_error'>{errors.Nombre}</p>}  

          <div>
            <InputDifiult handlechange={handlechange}/>
             {errors.Dificultad && <p className='text_error'>{errors.Dificultad}</p>}
          </div>
          <div>
            <label className='stylo_label' >Duracion</label>
            <input className='input_create'
              type='text' 
              placeholder='Duracion promedio de tu actividad'
              value={input.Duracion}
              name='Duracion'
              onChange={handlechange}
            />
          </div>
            {errors.Duracion && <p className='text_error'>{errors.Duracion}</p>}
          <Temporadas handlechange={handlechange}/>
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