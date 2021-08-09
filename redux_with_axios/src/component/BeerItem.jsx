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
      <Modal style={{display:showModal}} onClick={()=>setShowModal('none')}>
        <InnerModal>
          <h1>{data.name}</h1>
          <div>
            <img src={data.image_url} alt={data.name} />
          </div>
        </InnerModal>
      </Modal>
        
    </>
  )
}

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
`
const InnerModal =styled.div `
  width:1000px;
  height: 500px;
  background: #fff;
  margin: 5rem auto;
`