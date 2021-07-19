import { useState, useEffect } from "react"
const Fetch = (url)=>{
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(dat => setData(dat))
  },[url])
  return data
}
export default Fetch