import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Table, TableBody, TableHead,TableCell,TableRow } from '@material-ui/core'

import BeerItem from './BeerItem'
import { useDispatch, useSelector } from 'react-redux'
import {getData} from '../redux/beerlist/action'
const BeerList = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const list = useSelector(state => state)
  const dispatch = useDispatch();
  const getApi = async () => {
    const DATA = await axios.get('https://api.punkapi.com/v2/beers')
    .catch(err => console.log(err))
    dispatch(getData(list))

    
  } 
  

  useEffect(() => {
  }, [])
  console.log(list)
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>순위</TableCell>
            <TableCell>맥주 이미지</TableCell>
            <TableCell>맥주 이름</TableCell>
            <TableCell>도수</TableCell>
            <TableCell>용량</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {!isLoading ? <TableRow><TableCell>LOADING...</TableCell></TableRow>  : data.map((v,i) => <BeerItem key={v.id} data={v}/>)} */}

        </TableBody>
      </Table>
    </>
  )
}

export default BeerList