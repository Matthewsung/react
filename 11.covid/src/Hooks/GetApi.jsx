import { useEffect } from "react"
import axios from "axios";
const GetApi = (setCountry,setDate,setTotalConfirm,setTotalDeaths,setNewConfirm,setNewDeaths)=>{
  // const API = ()=>{
  //   const res = axios.get("https://api.covid19api.com/summary")
  //   return res
  // };
  // useEffect(()=>{
  //   const use_res = API()
  //   use_res.then((res)=>{
  //     setCountry(res.data.Countries)
  //     return res.data.Global
  //   }).catch(error => console.log(error))
  //   .then(res => {
  //     setDate(res.Date.split('T')[0])
  //     setTotalConfirm(res.TotalConfirmed)
  //     setTotalDeaths(res.TotalDeaths)
  //     setNewConfirm(res.NewConfirmed)
  //     setNewDeaths(res.NewDeaths)
  //   })
    
  // },[])
  const API = ()=>{
    const res = axios.get("https://api.covid19api.com/summary")
    return res
  };
  useEffect(()=>{
    const use_res = API()
    use_res.then((res)=>{
      return res.data
    }).catch(error => console.log(error))    
  },[])
  return 
}
export default GetApi 