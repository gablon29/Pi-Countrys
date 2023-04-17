import axios from 'axios'
import {
    GET_COUNTRIES,
    ORDER_BY_NAME,
    GET_ACTIVITIES,
    POST_ACTIVITIES,
    DETAIL,
    SEARCH_COUNTRIES,
} from './constantes';

export const getCountries = () => async (dispatch) => {
    try {
        let response = await axios.get('http://localhost:3001/country/myCountries');
        return dispatch({
            type: GET_COUNTRIES,
            payload: response.data
        })
    } catch (error) {
        return {
            error: error.message
        }
    }
}
export const searchCountries = (search) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:3001/countries/name?name${search}`);
        return dispatch({
            type: SEARCH_COUNTRIES,
            payload: response.data
        })
    } catch (error) {
        return {
            error: error.message
        }
    }
}