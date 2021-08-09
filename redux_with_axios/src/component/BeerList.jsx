import React, {useEffect} from 'react'
import axios from 'axios'
import { Table, TableBody, TableHead,TableCell,TableRow } from '@material-ui/core'

import BeerItem from './BeerItem'
import BeerListFilter from './BeerListFilter'
import { useDispatch, useSelector } from 'react-redux'
import { getData , selectedData } from '../redux/beerlist/action'

const BeerList = () => {
  const list = useSelector(state => state.getData)
  const selected_list = useSelector(state => state.selectedData)
  const dispatch = useDispatch();
  const getApi = async () => {
    const DATA = await axios.get('https://api.punkapi.com/v2/beers')
    .catch(err => console.log(err))
    dispatch(getData(DATA.data))
    dispatch(selectedData(DATA.data))
  } 

  useEffect( () => {
    getApi()
  }, [])
  return (
    <>
      <BeerListFilter />
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
          {selected_list.map((v,i) => <BeerItem key={v.id} data={v}/>)}
        </TableBody>
      </Table>
    </>
  )
}

export default BeerList