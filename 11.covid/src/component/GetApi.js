import React, { useEffect, useRef, useState  } from 'react';
import axios from 'axios'
import ApiCountry from './ApiCountry';
import { Link } from 'react-router-dom';

const API = ()=>{
  const res = axios.get("https://api.covid19api.com/summary")
  return res
};

const GetApi =()=>{
  const [country,setCountry] = useState([])
  const [date,setDate] = useState(0)
  const [totalConfirm, setTotalConfirm] = useState(0)
  const [totalDeaths, setTotalDeaths] = useState(0)
  const [newConfirm, setNewConfirm] = useState(0)
  const [newDeaths, setNewDeaths] = useState(0)
  const [search, setSearch] = useState('')
  const [searched, setSearched]=useState([])
  useEffect(()=>{
    const use_res = API()
    use_res.then((res)=>{
      setCountry(res.data.Countries)
      console.log(res.data.Countries)
      return res.data.Global
    }).catch(error => console.log(error))
    .then(res => {
      setDate(res.Date.split('T')[0])
      setTotalConfirm(res.TotalConfirmed)
      setTotalDeaths(res.TotalDeaths)
      setNewConfirm(res.NewConfirmed)
      setNewDeaths(res.NewDeaths)
    })
    console.log(searched.length)
  }, [])
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
        <div className='total_box'>
          <h1>기준일 : {date}</h1>
          <h2>현재까지 총 확진자수 : {totalConfirm}</h2>
          <h2>현재까지 총 사망자수 : {totalDeaths}</h2>
          <h2>금일 확진자수 : {newConfirm}</h2>
          <h2>금일 사망자수 : {newDeaths}</h2>
        </div>
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





export default GetApi