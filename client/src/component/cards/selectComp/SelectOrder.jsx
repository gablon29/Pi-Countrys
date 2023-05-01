import React from 'react'
import { LESS_NUMEROUS, NUMEROUS_COUNTRYS } from '../../../redux/constantes';

const SelectOrder = ({handle_sort, handle_sort_population}) => {
    
  const handle_sort_order = (evento) => {
    evento.preventDefault();
    let value = evento.target.value;
    if (value === 'Todos' || value === 'A - Z') {
      handle_sort(value)
    } else {
      handle_sort_population(value)
    }
  }
  return (
    <div>
          <select className='filtrado'
              onChange={evento => handle_sort_order(evento)}
              handle_sort="{handle_sort}"
              handle_sort_population="{handle_sort_population}">
          <option>Todos</option>
          <option>A - Z</option>
          <option value={NUMEROUS_COUNTRYS}>Mas Populares</option>
          <option value={LESS_NUMEROUS}>Menos Populares</option>
        </select>
    </div>
  )
}


export default SelectOrder
