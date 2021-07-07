import React, { useEffect, useState  } from 'react';
import axios from 'axios'

const API = async ()=>{
  const res = await axios.get("https://api.covid19api.com/summary")
  return res.data.Countries
};

const GetApi =()=>{
  
  const [data,setData] = useState({})
  const [country, setCountry] = useState([])
  const [confirm,setConfirm] = useState([])
  const [dead,setDead] = useState([])
  const [total,setTotal] = useState([])
  
  
  useEffect(()=>{
    const use_res = API()
    use_res.then((promise)=> {
      setData(promise)
      // setCountry(promise[0].Country)
      // setConfirm(promise[0].NewConfirmed)
      // setDead(promise[0].TotalDeaths)
      // setTotal(promise[0].TotalConfirmed)
    })
  }, [])
  function ITEM (){
    // setCountry( )
    return 1;
     
  }
  return(
    <>
      <div className="container">
        <ITEM />
        {/* <h1>{country}</h1>
        <ul>
          <li>오늘의 확진자 수 : {confirm} 명</li>
          <li>총 확진자수 : {total} 명</li>
          <li>총 사망자수 : {dead} 명</li>
        </ul> */}
        <div></div>
      </div>
    </>
  )
}





export default GetApi