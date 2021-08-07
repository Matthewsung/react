import React from 'react'
import {TableRow, TableCell} from '@material-ui/core'
import '../App.css'

export default function BeerItem({data}) {
  const showDetails = () => {
    console.log('모달창 만들기')
  }
  return (
    <TableRow onClick={showDetails}>
      <TableCell>{data.id}</TableCell>
      <TableCell><img src={data.image_url} alt={data.name} /></TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.abv}</TableCell>
      <TableCell>{`${data.volume.value} ${data.volume.unit} `}</TableCell>
    </TableRow>
  )
}


