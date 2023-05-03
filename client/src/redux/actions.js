import axios from 'axios'
import {
    GET_COUNTRIES,
    FILTER_CONTINENT,
    ORDER_ALFABETIC,
    ORDER_POPULATION,
    GET_ACTIVITIES,
    POST_ACTIVITIES,
    DETAIL,
    RESET_DETAIL,
    SEARCH_COUNTRIES,
} from './constantes';

export const getCountries = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:3001/countries')
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
        alert('No existe pais con ese nombre')
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
    catch (error) {
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

export const filterByContinent = (payload) => {
    return {
        type: FILTER_CONTINENT,
        payload,
    };
}

export const orderByName = (payload) => {
    return {
        type: ORDER_ALFABETIC,
        payload
    };
}

export const orderByPopulation = (payload) => {
    return {
        type: ORDER_POPULATION,
        payload
    };
}

export const getActivities = () => async (dispatch) => {
    try {
        let response = await axios.get("http://localhost:3001/activity");
        return dispatch({
            type: GET_ACTIVITIES,
            payload: response.data
        })
    } catch (error) {
        alert('No hay actividad todavia con ese nombre')
        return {
            error: error.message
        }
    }
};

export const postActivities = (payload) => async (dispatch) => {
    try {
        await axios.post('http://localhost:3001/activity', payload);
        return dispatch({
            type: POST_ACTIVITIES,
        });
    } catch(error) {
        alert('Esta actividad ya ha sido creada')
        return { error: error.message }
    }
}