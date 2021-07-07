import React,{Component} from 'react';
import { HashRouter, Route} from  'react-router-dom'
import About from './route/About'
import Home from './route/Home'
import Nav from './component/nav';

class App extends Component {
  render(){
    return(
      <HashRouter>
        <Nav/>
        <Route path="/" >
          <h1>Home</h1>
        </Route>
        {/* <Route path="/home/intro" >
          <Home/>
          <h1>Home intro</h1>
        </Route>
        <Route path="/about">
          <About/>
          <span>어바웃</span>
        </Route> */}
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About} />
      </HashRouter>
    )
  }
}


export default App;
