import {
    GET_COUNTRIES,
    SEARCH_COUNTRIES
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
            }
        default:
            return state
    };
};