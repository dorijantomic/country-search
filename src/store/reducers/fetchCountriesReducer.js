import * as actionTypes from '../actions/actionTypes';

const initialState = {
    reduxData: null,
    loading: false
}

const countriesReducer = (state = initialState, action) => {
   
    switch(action.type) {
        case actionTypes.FETCH_BEGIN : {
            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.FETCH_SUCCESS : {
            return {
                ...state,
                reduxData: action.data,
                loading: false
            }
        } default: {
            return state
        }
    }

}

export default countriesReducer