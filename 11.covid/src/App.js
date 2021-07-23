import React, {  } from 'react';
import './App.css';
import Main from './component/Main';
import Head from './component/Head'
import Total from './component/Total';
import Detail from './component/Detail'
import {Route,BrowserRouter,Switch} from 'react-router-dom'
const App= ()=>{
  
    return (
      <BrowserRouter>
        <Head />
        <Total />

        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/:country' >
            <Detail />
          </Route>
        </Switch>
        
      </BrowserRouter>
      );
  
}

export default App;
