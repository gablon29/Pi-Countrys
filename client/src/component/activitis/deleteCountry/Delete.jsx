import React from 'react'
import { deleteofArray } from '../../generalFunction/generalFn';

const Delete = ({ handle_delete, input }) => {
    
    let arrayCountry = [...input.countryid];

    const btnEliminate = (id) => {
        handle_delete(id)
       const newState = deleteofArray(id, arrayCountry)
        return newState;
}

  return (
    <div>
          {
              arrayCountry.map(countries => (
              <div key={countries}>
                      <input key={countries} type='button'
                          value='X'
                          onClick={() => btnEliminate(countries)} 
                          handle_delete="{handle_delete}"
                          />
                          
                <p>{countries}</p>
              </div>
            ))}
          
    </div>
  )
}

export default Delete
