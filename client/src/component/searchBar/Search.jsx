import React, { useState }  from 'react'
import { useDispatch } from 'react-redux';
import { searchCountries } from '../../redux/actions';
import './Search.css'

const SearchBar = ({functsearch}) => {
    const [stateSearch, setStateSearch] = useState('');
    const dispatch = useDispatch();

    const onsubmit = (evento) => {
        evento.preventDefault();
        if (stateSearch.length === 0) return alert('Debes ingresar un país');
        dispatch(searchCountries(stateSearch))
      setStateSearch('');
      functsearch()
    }    
    
    const onInputChange = (evento) => {
        evento.preventDefault();
        setStateSearch(evento.target.value)
    }

  return (
    <div>
          <form onSubmit={onsubmit} functsearch="{functsearch}">
              <input className='casillaBusqueda' type='text' placeholder='Que país deseas buscar' onChange={onInputChange} value={stateSearch}/>
              <input className='btn-buscar' type='submit' value='submit'/>
      </form>
    </div>
  )
}

export default SearchBar;