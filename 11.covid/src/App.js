import React, {  } from 'react';
import './App.css';
import GetApi from './component/GetApi';
import Head from './component/Head'
import {Route,BrowserRouter,Switch} from 'react-router-dom'
const App= ()=>{
  
    return (
      <BrowserRouter>
        <Head />
        <Route path='/'>
          <GetApi />
        </Route>
        
      </BrowserRouter>
      );
  
}

export default App;
