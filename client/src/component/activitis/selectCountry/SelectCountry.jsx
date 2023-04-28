import React from 'react'
import { useSelector } from 'react-redux'

const SelectCountry = ({handleselect}) => {
    
    const countries = useSelector((state) => state.allCountries)

    const selectChange = (evento) => {
        const prop = 'countryid'
        const value = evento.target.value;
        handleselect(prop, value)
}

  return (
      <div>
          <select onChange={(evento) => selectChange(evento)} handleselect="{handleselect}">
              <option>Elige un pais</option>
          {
              countries.map(({ ID,Nombre }) => (
                  <option key={ID}>{Nombre}</option>
              ))
      }
          </select>
    </div>
  )
}

export default SelectCountry
