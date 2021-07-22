import { useState, useEffect } from "react"
import axios from "axios";
// import GetApi from '../Hooks/GetApi'
const Total = ()=>{
  
  const [date,setDate] = useState(0)
  const [totalConfirm, setTotalConfirm] = useState(0)
  const [totalDeaths, setTotalDeaths] = useState(0)
  const [newConfirm, setNewConfirm] = useState(0)
  const [newDeaths, setNewDeaths] = useState(0)
  const API = ()=>{
    const res = axios.get("https://api.covid19api.com/summary")
    return res
  };
  useEffect(()=>{
    const use_res = API()
    use_res.then((res)=>{
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
  
  return (
    <>
      <div className='total_box'>
        <h1>기준일 : {date}</h1>
        <h2>총 확진자수 : {totalConfirm}</h2>
        <h2>총 사망자수 : {totalDeaths}</h2>
        <h2>금일 확진자수 : {newConfirm}</h2>
        <h2>금일 사망자수 : {newDeaths}</h2>
      </div>
      
    </>
  )
}
export default Total