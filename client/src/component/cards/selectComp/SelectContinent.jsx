import React from 'react'

const SelectContinent = ({ handle_filter_continent }) => {
    
    const handle_change_continent = (evento) => {
        evento.preventDefault()
        const value = evento.target.value;
        handle_filter_continent(value)
    }

  return (
    <div>
          <select className='filtrado'
              onChange={(evento) => handle_change_continent(evento)}
           handle_filter_continent="{handle_filter_continent}">
          <option>Todos</option>
          <option>South America</option>
          <option>North America</option>
          <option>Asia</option>
          <option>Africa</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
    </div>
  )
}

export default SelectContinent
