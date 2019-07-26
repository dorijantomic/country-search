import * as actionTypes from '../actions/actionTypes';

const initialState = {
    countries: null
}

const countriesReducer = (state = initialState, action) => {
   
    switch(action.type) {
        case actionTypes.FETCH_SUCCESS : {
            return {
                ...state,
                countries: action.data
            }
        } default: {
            return state
        }
    }

}

export default countriesReducer