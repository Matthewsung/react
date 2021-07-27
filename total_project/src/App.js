import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Main from './component/Main'
import Footer from './component/Footer'
function App() {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
