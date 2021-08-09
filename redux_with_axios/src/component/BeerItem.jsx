import React,{useState} from 'react'
import {TableRow, TableCell} from '@material-ui/core'
import '../App.css'
import styled from 'styled-components'
export default function BeerItem({data}) {
  const [showModal , setShowModal] = useState('none')
  const showDetails = () => {
    console.log(data)
    setShowModal('block')
  }
  return (
    <>
      <TableRow onClick={showDetails}>
        <TableCell>{data.id}</TableCell>
        <TableCell className="img_box"><img src={data.image_url} alt={data.name}  /></TableCell>
        <TableCell>{data.name}</TableCell>
        <TableCell>{data.abv}</TableCell>
        <TableCell>{`${data.volume.value} ${data.volume.unit} `}</TableCell>
      </TableRow>
      <Modal style={{display:showModal}} />
        
    </>
  )
}


