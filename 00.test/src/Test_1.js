import { useEffect, useState } from "react"
import axios from "axios";
const GetApi = ()=>{
  const [tmp , setTmp] = useState([])
  const API = ()=>{
    const res = axios.get("https://api.covid19api.com/summary")
    return res
  };
  useEffect(()=>{
    const use_res = API()
    use_res.then((res)=> {
      setTmp(res.data)
    }).catch(error => console.log(error))
  },[])
  return tmp
}
export default GetApi 