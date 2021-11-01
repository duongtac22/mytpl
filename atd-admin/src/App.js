import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import User from './pages/UserPage';
import Home from './pages/Homepage';
import './App.css';


import RouteApp from './components/RouteApp'


const App = () => {

  return(
  <BrowserRouter>
    <Switch>
      <RouteApp path={'/users'} component={User} />
      <RouteApp path={'/'} component={Home} />
    </Switch>
  </BrowserRouter>
  )
};

export default App;