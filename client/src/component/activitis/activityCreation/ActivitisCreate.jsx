import React from 'react'
import { useState, useEffect } from 'react';
import { getActivities, getCountries, postActivities,} from '../../../redux/actions';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validation, validationSubmit, validationArray } from '../../validations/validation';
import NavBar from '../../navbar/Navbar'
import './ActivitiStilo.css'
import Temporadas from '../compTemporadas/Temporadas';
import InputName from '../inputsComp/InputName';
import InputDifiult from '../inputsComp/InputDifiult';
import InputDuration from '../inputsComp/InputDuration';
import SelectCountry from '../selectCountry/SelectCountry';
import Delete from '../deleteCountry/Delete';

const ActivitisCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState({
    Nombre: '',
    Dificultad: '',
    Duracion: '',
    Temporada: '',
    countryid: [] 
  })
  const [errors, setErrors] = useState({...input});
  useEffect(() => {
    dispatch(getActivities())
    dispatch(getCountries())
  }, [dispatch]);

  const activity = useSelector(state => state.activitis)

  const handlechange = (prop, value) => {
    setInput(input =>({
      ...input,
      [prop]: value
    }));
    setErrors(validation({
      ...input,
      [prop]: value
    }, errors, activity));
  }
  
  const handle_delete = (id) => {
    let filterCount = input.countryid.filter((country => country !== id))
    setInput({
      ...input,
      countryid: filterCount
    })
    if (!input.countryid.length) 
    setErrors(errors => ({
      ...errors,
      countryid: [],
      }))
  }
  
  const handleselect = (prop, value) => {
    if (validationArray(value, input.countryid) !== undefined) {
      setInput(input => ({
        ...input,
        [prop]: [...input.countryid, value]
      }))
      setErrors(errors => ({
        ...errors,
        countryid: ''
      }))
      }
     else return alert('Pais repetido')
  }
// formulario
  // nuevo cambio
  // 
  const handleSubmit = (evento) => {
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
           <InputDuration handlechange={handlechange}/>
          </div>
            {errors.Duracion && <p className='text_error'>{errors.Duracion}</p>}
          <Temporadas handlechange={handlechange}/>
          <div>
            <SelectCountry handleselect={handleselect}
            />
          </div>
          <div>
          <Delete input={input} handle_delete={handle_delete}/>
           
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