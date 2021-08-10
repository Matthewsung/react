import React,{useState} from 'react'
import {TableRow, TableCell} from '@material-ui/core'
import '../App.css'
import styled from 'styled-components'

const ImgBox = styled.div`
height: 50px;
`
const Img = styled.img`
height: 100%;

`
export default function BeerItem({data}) {
  const [showModal , setShowModal] = useState('none')
  const showDetails = () => {
    setShowModal('block')
  }
  return (
    <>
      <TableRow onClick={showDetails}>
        <TableCell>{data.id}</TableCell>
        <TableCell>
          <ImgBox>
            <Img src={data.image_url} alt={data.name}/>
          </ImgBox>
        </TableCell>
        <TableCell>{data.name}</TableCell>
        <TableCell>{data.abv}</TableCell>
        <TableCell>{`${data.volume.value} ${data.volume.unit} `}</TableCell>
      </TableRow>
      <Modal style={{display:showModal}} onClick={()=>setShowModal('none')}>
        <InnerModal>
          <InnerImgBox>
            <InnerImg src={data.image_url} alt={data.name}/>
          </InnerImgBox>
          <InnerRright>
            <Table  >
              <Tr>
                <Td showModal={showModal}>id </Td>
                <Td>{data.id}</Td>
              </Tr>
              <Tr>
                <Td>name </Td>
                <Td>{data.name}</Td>
              </Tr>
              <Tr>
                <Td>abv </Td>
                <Td>{data.abv}</Td>
              </Tr>
              <Tr>
                <Td>attenuation_level </Td>
                <Td>{data.attenuation_level}</Td>
              </Tr>
              
              <Tr>
                <Td>conTributed_by </Td>
                <Td>{data.conTributed_by}</Td>
              </Tr>
              
              <Tr>
                <Td>ebc </Td>
                <Td>{data.ebc}</Td>
              </Tr>
              <Tr>
                <Td>first_brewed </Td>
                <Td>{data.first_brewed}</Td>
              </Tr>
                
              <Tr>
                <Td>ibu </Td>
                <Td>{data.ibu}</Td>
              </Tr>
              
              <Tr>
                <Td>ph </Td>
                <Td>{data.ph}</Td>
              </Tr>
              <Tr>
                <Td>srm </Td>
                <Td>{data.srm}</Td>
              </Tr>
              <Tr>
                <Td>tagline </Td>
                <Td>{data.tagline}</Td>
              </Tr>
              <Tr>
                <Td>target_fg </Td>
                <Td>{data.target_fg}</Td>
              </Tr>
              <Tr>
                <Td>target_og </Td>
                <Td>{data.target_og}</Td>
              </Tr>
              <Tr>
                <Td>boil_volume </Td>
                <Td>{data.boil_volume.value + data.boil_volume.unit}</Td>
              </Tr>
              <Tr>
                <Td>volume </Td>
                <Td>{data.volume.value +data.volume.unit }</Td>
              </Tr>
              <Tr>
                <Td>food_pairing </Td>
                <Td>{data.food_pairing}</Td>
              </Tr>
              <Tr>
                <Td>brewers_tips </Td>
                <Td>{data.brewers_tips}</Td>
              </Tr>
              <Tr>
                <Td>description </Td>
                <Td>{data.description}</Td>
              </Tr>
            </Table>
          </InnerRright>
        </InnerModal>
      </Modal>
    </>
  )
}

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  background: rgba(0,0,0,0.7);
  position: fixed;
  left: 0;
  top: 0;

`
const InnerModal =styled.div `
  width: 1440px;
  height: calc(100vh - 6rem);
  background: #fff;
  padding:50px;
  margin: 3rem auto;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const InnerImgBox = styled.div`
  width:30%;
  height:100%;
`
const InnerImg = styled.img`
  height:100%
`

const InnerRright = styled.div`
  width: 70%;
  height:100%;
`


const Table = styled.table`
  border-collapse: collapse;
`
const Tr = styled.tr`
`
const Td = styled.td`

  border: 1px solid;
  text-align: left;
  padding: 5px 15px;
  box-sizing: border-box;
  &:first-child{
    width: 160px;
    font-size: 18px;

  
}
`