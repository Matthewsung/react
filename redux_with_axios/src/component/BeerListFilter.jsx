import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {selectedData} from '../redux/beerlist/action'
const BeerListFilter = () => {
  const list = useSelector(state => state.getData)
  const dispatch = useDispatch()
  let selected_list = useSelector(state => state.selectedData)

  const inputCheck = Array.from( document.querySelectorAll('.inputChk') )
  const [reset, setReset] = useState(0)
  const onClickTmp = (e) =>{
    e.preventDefault()
    let checkedBeer = []
    
    inputCheck.map( (v,i) => {
      setReset(0)
      if(v.checked){
        checkedBeer = [...checkedBeer, ...filteredList(v.value)]
      }
    })
    const filtered_list = checkedBeer.filter( (el, index) => checkedBeer.indexOf(el) === index)
    console.log(filtered_list.length)
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
      <form onSubmit={onClickTmp}>
        <button >확인하기</button>
        <label>
          <input type="checkbox" value="4"  className="inputChk"/>
          5 이하
        </label>
        <label>
          <input type="checkbox" value="5"  className="inputChk"/>
          5-6
        </label>
        <label>
          <input type="checkbox" value="6"  className="inputChk"/>
          6-7
        </label>
        <label>
          <input type="checkbox" value="7" className="inputChk"/>
          7-8
        </label>
        <label>
          <input type="checkbox" value="10"  className="inputChk"/>
          10이상
        </label>
      </form>

    </>
  )
}

export default BeerListFilter