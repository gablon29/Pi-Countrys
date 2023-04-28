import React from 'react'

const InputName = ({handlechange}) => {

    const handleInputChange = (evento) => {
        const prop = evento.target.name;
        const value = evento.target.value;
        handlechange(prop, value)
    }

  return (
    <div>
      <h1 className='titulo_actividad'>Crea tu actividad</h1>
          <div>
            <label className='stylo_label'>Actividad</label>
            <input className='input_create'
              type='text' 
              placeholder='Nombre de la actividad'
              name='Nombre'
              onChange= {handleInputChange}
              handlechange="{handlechange}"
            />
          </div>
    </div>
  )
}

export default InputName
