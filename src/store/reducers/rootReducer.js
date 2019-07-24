import { combineReducers } from 'redux'
import theme from './themeSwitchReducer'
import countries from './fetchCountriesReducer'
const reducer = combineReducers({
    theme, countries
  })

export default reducer