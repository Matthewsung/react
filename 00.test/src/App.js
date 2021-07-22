import './App.css';
import { useEffect, useState } from 'react';
import Test_1 from './Test_1';

function App() {
  const [ttt, aaa] = useState([])
  console.log(Test_1().Countries)
  aaa(Test_1().Countries)
    
  return (
    <div className="App">
      <h1>adsf</h1>
    </div>
  );
}

export default App;
