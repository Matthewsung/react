import './App.css';
import Head from './component/Head'
import DayList from './component/DayList';
import Day from './component/Day';
import db from './db/db.json'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Head />
        <Switch>
          <Route exact path="/">
            <DayList/>
          </Route>
          <Route  path="/day/:day">
            <Day/>
          </Route>
          <Route  path="/create-words">
            <CreateWord/>
          </Route>
          <Route  path="/create-days">
            <CreateDay />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
