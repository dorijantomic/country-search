import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider,  } from 'react-redux'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(rootReducer, composeEnchancers(
    applyMiddleware(Thunk)
))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
