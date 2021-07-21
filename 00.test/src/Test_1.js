import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Test_1 =  () => {
  const [data, setData] = useState({})
  const [country,setCountry] = useState([])
  const [global, setGlobal] = useState({})
// Date: "2021-07-21T05:37:24.98Z"
// NewConfirmed: 497823
// NewDeaths: 8473
// NewRecovered: 277240
// TotalConfirmed: 190881200
// TotalDeaths: 4099194
// TotalRecovered: 125815582
  const [totalDeath, setTotalDeath] = useState(0)
  useEffect(() => {
    const Api = axios.get('https://api.covid19api.com/summary')
    Api.then(promise=>promise.data).catch((error)=>{console.log(error)})
    .then((res)=>{
      setGlobal(res.Global)
      return res.Countries
    })
    // .then((res)=>{
    //   setCountry(res)
    //   console.log(res)
    // })
  }, [])
const onClickH1=()=>{
  console.log(global.Date)
}
  // const API = ()=>{
  //   const res = axios.get("https://api.covid19api.com/summary")
  //   return res.data
  // };
  return (
    <>
      <h1 onClick={onClickH1}>{global.Date}</h1>  
    </>
  )
}

export default Test_1 