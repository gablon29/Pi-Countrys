import axios from 'axios'
import {
    GET_COUNTRIES,
    ORDER_BY_NAME,
    GET_ACTIVITIES,
    POST_ACTIVITIES,
    DETAIL,
    RESET_DETAIL,
    SEARCH_COUNTRIES,
} from './constantes';

export const getCountries = () => async (dispatch) => {
    try {
        let response = await axios.get('http://localhost:3001/countries');
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
export const searchCountries = (stateSearch) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:3001/countries/name?name=${stateSearch}`);
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

export const getDetail = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch({
            type: DETAIL,
            payload: response.data
        })
    }
    catch (error){
        return {
            error: error.message
        }
    }
}

export const resetDetail = () => (dispatch) => {
    dispatch({
        type: RESET_DETAIL
    })
}