import './App.css';
import Gugudan from './component/Gugudan';
import {Route,BrowserRouter,Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Gugudan />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
