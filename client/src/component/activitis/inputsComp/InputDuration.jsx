import React from 'react'

const InputDuration = ({ handlechange }) => {
    
    const handleInputChange = (evento) => {
        const prop = evento.target.name;
        const value = evento.target.value;
        handlechange(prop, value)
    }
    
        return (
            <div>
                <label className='stylo_label' >Duracion</label>
                <input className='input_create'
                    type='text'
                    placeholder='Duracion promedio de tu actividad'
                    name='Duracion'
                    onChange={handleInputChange}
                    handlechange={handlechange}
                />
            </div>
        )
    }

export default InputDuration
