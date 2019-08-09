import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout/Layout'
import CountryProfile from './containers/CountryProfile/CountryProfile'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Paper from "@material-ui/core/Paper";
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Layout} />
        <Route exact path='/:countryName' component={CountryProfile} />
      </Switch>
    
    </HashRouter>
      
  )
}

export default App;
