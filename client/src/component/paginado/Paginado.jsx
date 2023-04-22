import React from 'react'
import './Paginado.css';

const Paginado = ({ countryPerPage, countries, paginado }) => {
    
    const paginas = [];
    for (let i = 1; i <= Math.ceil(countries / countryPerPage); i++) {
        paginas.push(i)
    }
  return (
    <nav>
          <ul>
              {paginas && paginas.map(num => (
                  <li key={num}>
                      <button id='paginado_btn' onClick={() => paginado(num)}>{num}</button>
                  </li>
              ))}
      </ul>
    </nav>
  )
}

export default Paginado
