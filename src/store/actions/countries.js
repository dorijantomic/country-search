import * as actionTypes from './actionTypes'

export const fetchSuccess = ( res ) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        data: res,
    }
}

export const fetchBegin = (res) => {
    return dispatch => {
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then(res => res.json())
        .then(res => {
            dispatch(fetchSuccess(res))
        })
    }
}