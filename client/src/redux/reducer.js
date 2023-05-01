import {
    DETAIL,
    ORDER_ALFABETIC,
    ORDER_POPULATION,
    NUMEROUS_COUNTRYS,
    FILTER_CONTINENT,
    GET_COUNTRIES,
    RESET_DETAIL,
    SEARCH_COUNTRIES,
    POPULATION,
    GET_ACTIVITIES,
    POST_ACTIVITIES,
} from './constantes';

let initialState = {
    countries: [],
    allCountries: [],
    activitis: [],
    detail: [],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
            }
        case SEARCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            };
        case DETAIL:
            return {
                ...state,
                detail: action.payload
            };
        case RESET_DETAIL:
            return {
                ...state,
                detail: []
            }
        case FILTER_CONTINENT:
            const filterContinent = state.allCountries;
            const filter = action.payload === 'Todos' ? filterContinent :
                filterContinent.filter(country => country.Continente === action.payload)
            return {
                ...state,
                countries: filter
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activitis: action.payload
            };
        case POST_ACTIVITIES:
            return {
                ...state,
            }
        
        case ORDER_ALFABETIC:
            let filterName = state.countries;
            let filterByName = action.payload === 'Todos' ? filterName.sort((a, b) => {
                const countryA = a.Nombre.toUpperCase();
                const countryB = b.Nombre.toUpperCase();
                if (countryA < countryB) return 1;
                if (countryA > countryB) return -1;
                return 0;
            }) :
                filterName.sort((a, b) => {
                    const countryA = a.Nombre.toUpperCase();
                    const countryB = b.Nombre.toUpperCase();
                    if (countryA < countryB) return -1;
                    if (countryA > countryB) return 1;
                    return 0;
                })
            return {
                ...state,
                countries: filterByName
            }
        case ORDER_POPULATION:
            let getPopulation = action.payload === NUMEROUS_COUNTRYS  ? 
                state.countries.sort((a, b) => {
                    const countryA = a.Poblacion;
                    const countryB = b.Poblacion;
                    if (countryA < countryB) return 1;
                    if (countryA > countryB) return -1;
                    return 0
                }) : state.countries.sort((a, b) => {
                    const countryA = a.Poblacion;
                    const countryB = b.Poblacion;
                    if (countryA < countryB) return -1;
                    if (countryA > countryB) return 1;
                    return 0
                })
            return {
                ...state,
                countries: getPopulation
            }
                default:
                    return state
            };
        };
            

           
                

        