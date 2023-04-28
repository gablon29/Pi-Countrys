import React from 'react'

const InputDifiult = ({handlechange}) => {

    const handleInputChange = (evento) => {
        const prop = evento.target.name;
        const value = evento.target.value;
        handlechange(prop, value)
    }
  return (
    <div>
      <div>
            <label className='stylo_label'>Dificultad</label>
            <input className='input_create'
              type='range' 
              name='Dificultad'
              min='1'
              max='5'
              onChange={handleInputChange}
              handlechange={handlechange}
            />
            <p className='text_range'>ingresa dificultad</p>
    </div>
    </div>
  )
}

export default InputDifiult
