import React, { useEffect, useRef, useState ,useParams } from 'react';
import { useLocation } from 'react-router-dom';


const Detail = ()=>{
  const choose = useLocation().state.country
  const [country,setCountry] = useState(choose.Country)
  const [newconfirmed,setNewconfirmed] = useState(choose.NewConfirmed)
  const [newdeaths,setNewdeaths] = useState(choose.NewDeaths)
  const [totalconfirmed,setTotalconfirmed] = useState(choose.TotalConfirmed)
  const [totaldeaths,setTotaldeaths] = useState(choose.TotalDeaths)
  console.log(choose)
  return(
    <>
      <table>
        <tbody>
          <tr className="d_tr">
            <td className="d_td">나라</td>
            <td className="d_td">금일 확진자</td>
            <td className="d_td">금일 사망자</td>
            <td className="d_td">총 확진자</td>
            <td className="d_td">총 사망자</td>
          </tr>
          <tr className="d_tr">
            <td className="d_td">{country}</td>
            <td className="d_td">{newconfirmed}</td>
            <td className="d_td">{newdeaths}</td>
            <td className="d_td">{totalconfirmed}</td>
            <td className="d_td">{totaldeaths}</td>
          </tr>
        </tbody>
      </table>
      
    </>
  )
}
export default Detail