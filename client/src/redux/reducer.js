import {
    DETAIL,
    GET_COUNTRIES,
    RESET_DETAIL,
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
            };
        case DETAIL:
            return {
                ...state,
                detail: action.payload
            };
        case RESET_DETAIL:
            return {
                ...state,
                detail:[]
            }
        default:
            return state
    };
};