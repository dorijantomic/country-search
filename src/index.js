import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider,  } from 'react-redux'
import { loadState, saveState } from './store/localstorage'
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const persistedState = loadState()
let store = createStore(rootReducer, persistedState, composeEnchancers(
    applyMiddleware(Thunk)
))
store.subscribe(() => {
    saveState(store.getState());
  });

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
