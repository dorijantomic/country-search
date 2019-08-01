import * as actionTypes from '../actions/actionTypes';

const initialState = {
    reduxData: null,
    loading: false,
    name: null,
}

const countriesReducer = (state = initialState, action) => {
   
    switch(action.type) {
        case actionTypes.COUNTRY_NAME : {
            return {
                ...state,
                
                name: action.name
            }
        }
        case actionTypes.FETCH_BEGIN : {
            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.FETCH_SUCCESS : {
            if(action.data!==  state.reduxData) {
                return {
                    ...state,
                    reduxData: action.data,
                    loading: false
                }
            } break;
            
        } default: {
            return state
        }
    }

}

export default countriesReducer