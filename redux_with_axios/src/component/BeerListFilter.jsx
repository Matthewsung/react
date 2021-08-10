import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {selectedData} from '../redux/beerlist/action'

import styled from 'styled-components'
const Title = styled.div`
display: inline-block;
padding-right: 20px;
margin-right: 30px;
font-weight: 700;
position: relative;
top: 2px;
  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 18px;
    background: #000;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`
const Submit = styled.button`
  padding: 5px 20px;
  background: #fff;
  border: 0.1rem solid;
  margin-left: 30px;
  color: #f1c423;
  font-size: 20px;
  font-weight:900;
  &:hover {
    color:#fff;
    background:#f1c423;
  }
`
const Form = styled.form`
  text-align: right;
  font-size: 20px;
  margin: 30px 0;
`
const Label = styled.label`
margin-right: 20px;
`
const Input = styled.input`
margin-right: 15px;
color: #676464;
`
const BeerListFilter = () => {
  const list = useSelector(state => state.getData)
  let selected_list = useSelector(state => state.selectedData)
  const dispatch = useDispatch()
  const inputCheck = Array.from( document.querySelectorAll('.inputChk') )
  const [reset, setReset] = useState(0)
  

  const onSubmitFilt = (e) =>{
    e.preventDefault()
    let checkedBeer = []
    
    inputCheck.map( (v,i) => {
      setReset(0)
      
      if(v.checked){
        checkedBeer = [...checkedBeer, ...filteredList(v.value)]
      }
    })


    const filtered_list = checkedBeer.filter( (el, index) => checkedBeer.indexOf(el) === index)
    filtered_list.length === 0 ? 
    dispatch(selectedData(list)) :
    dispatch(selectedData(filtered_list))
  }

  const filteredList = (data) =>{
    const value = Number(data)
    const tmp = value < 10 ?
    list.filter( ( data ) => data.abv < value +1 ).filter( (data) => data.abv > value ) :
    list.filter( ( data ) => data.abv > value )
    return tmp
  }
  

  
  return (
    <>
      <Form onSubmit={onSubmitFilt}>
        <Title> 도수 </Title>
        <Label>
          <Input type="checkbox" value="4"  className="inputChk"/>
          5 이하
        </Label>
        <Label>
          <Input type="checkbox" value="5"  className="inputChk"/>
          5-6
       </Label>
        <Label>
          <Input type="checkbox" value="6"  className="inputChk"/>
          6-7
       </Label>
        <Label>
          <Input type="checkbox" value="7" className="inputChk"/>
          7-8
       </Label>
        <Label>
          <Input type="checkbox" value="10"  className="inputChk"/>
          10이상
       </Label> 
        <Submit >확인하기</Submit>
      </Form>
    </>
  )
}

export default BeerListFilter