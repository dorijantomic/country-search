import * as actionTypes from './actionTypes'

export const fetchBegin = () => {
    return {
        type: actionTypes.FETCH_BEGIN
    }
}

export const countryName = (name) => {
    return {
        type: actionTypes.COUNTRY_NAME,
        name: name
    }
  
}

export const fetchSuccess = ( res ) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        data: res,
    }
}

export const fetchAllCountries = (e) => {
    return dispatch => {
        dispatch(fetchBegin())
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then(res => res.json())
        .then(res => {
           
            dispatch(fetchSuccess(res))
        })
    }
}

export const fetchSpecficCountry = e => {
    return dispatch => {
       dispatch(countryName(e))
    }
}

export const fetchRegion = e => {
    return dispatch => {
        dispatch(fetchBegin())
        fetch(`https://restcountries.eu/rest/v2/region/${e}`)
        .then(res => res.json())
        .then(res => {
            dispatch(fetchSuccess(res))
        })
    }
}