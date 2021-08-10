import './App.css';
import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Head from './component/Head';
import Main from './component/Main';
import BeerList from './component/BeerList';

import { createGlobalStyle } from 'styled-components'


function App() {
  const GlobalStyle = createGlobalStyle`
    *{
      margin: 0; 
      padding: 0; 
      box-sizing: border-box;
    }
    a{text-decoration: none;color: inherit;}
  `

  return (
    <BrowserRouter>
      <GlobalStyle/>
      
      <Switch>
          <Head/>
      </Switch>
      <Route exact path='/home' component={Main} />
      <Route path='/beerlist' component={BeerList} />
    </BrowserRouter>
  );
}

export default App;
