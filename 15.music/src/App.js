import './App.css';
import {Route, BrowserRouter, Switch}from 'react-router-dom'
import Head from './component/Head';
import Input from './component/Input';
function App() {
  return(
    <BrowserRouter>
      <div className="w_1440">
        {/* <Switch> */}
          <Head />
          <Input />
        {/* </Switch> */}
      </div>
    </BrowserRouter>
  )
}

export default App;
