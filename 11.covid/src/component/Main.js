import React, { useEffect, useRef, useState  } from 'react';
import axios from "axios";
import ApiCountry from './ApiCountry';
// import GetApi from '../Hooks/GetApi'


const Main =()=>{
  const API = ()=>{
    const res = axios.get("https://api.covid19api.com/summary")
    return res
  };
  const [country,setCountry] = useState([])
  const [search, setSearch] = useState('')
  const [searched, setSearched]=useState([])

  const [date,setDate] = useState(0)
  const [totalConfirm, setTotalConfirm] = useState(0)
  const [totalDeaths, setTotalDeaths] = useState(0)
  const [newConfirm, setNewConfirm] = useState(0)
  const [newDeaths, setNewDeaths] = useState(0)
  
  useEffect(()=>{
    const use_res = API()
    use_res.then((res)=>{
      setCountry(res.data.Countries)
      return res.data.Global
    }).catch(error => console.log(error))
    .then(res => {
      setDate(res.Date.split('T')[0])
      setTotalConfirm(res.TotalConfirmed)
      setTotalDeaths(res.TotalDeaths)
      setNewConfirm(res.NewConfirmed)
      setNewDeaths(res.NewDeaths)
    })
    
  },[])

  const onChangeInput = (e)=>{
    setSearch(e.target.value)
   
  }
  const onSubmitForm = (e)=>{
    e.preventDefault();
    setSearched(country.filter((v)=>v.Country.toLowerCase().includes(search)))
  }
  return(
    <>
      <div className="container" >
        <form onSubmit={onSubmitForm}>
          <input type='text' placeholder='국가를 검색해보세요' onChange={onChangeInput}/>
          <button>찾기</button>
        </form>
        <ul className='country_ul'>
          {
            searched.length === 0 ?
            country.map((v,i)=> <ApiCountry key={i+v} country={v}/>):
            searched.map((v,i)=> <ApiCountry key={i+v} country={v}/>)
          }
        </ul>         
      </div>
    </>
  )
}





export default Main