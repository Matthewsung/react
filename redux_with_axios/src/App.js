import './App.css';
import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Head from './component/Head';
import BeerList from './component/BeerList';
function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Head/>
      </Switch>
      <Route path='/beerlist'>
        <BeerList /> 
      </Route>
    </BrowserRouter>
  );
}

export default App;
