import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Table, TableBody, TableHead,TableCell,TableRow } from '@material-ui/core'

import BeerItem from './BeerItem'

export default function BeerList() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    const getApi = axios.get('https://api.punkapi.com/v2/beers')
    getApi.then(res => {
      setData(res.data)
      setIsLoading(true)
  })
  }, [])
  console.log(data)
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
          {isLoading && data.map((v,i) => <BeerItem key={v.id} data={v}/>)}
        </TableBody>
      </Table>
    </>
  )
}
