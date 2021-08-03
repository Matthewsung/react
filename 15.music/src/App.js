import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
function App() {
  // const [data, setData] = useState({})
  // const key = "1234"
  useEffect(() => {
    axios.get( "https://openapi.naver.com/v1/search/movie.json", {
      headers:{
        "X-Naver-Client-Id":"",
        "X-Naver-Client-Secret":"
      },
      params:{ query: "아이언맨", display: 20 },
    } ).then(res => {
      console.log(res)
    }).catch((error) => console.log(error))
  
  }, [])

  return (
    <div className="App">
     <h1>1234</h1>
    </div>
  );
}

export default App;
