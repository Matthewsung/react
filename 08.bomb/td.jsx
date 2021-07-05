import React,{useState, useCallback, useEffect, useReducer, useContext} from 'react'
import Table from './table'
import { CODE } from './bomb'
import { TableContext } from './bomb';
const getTdStyle = (code)=>{
  switch(code){
    case CODE.NORMAL : 
    case CODE.MINE : 
      return{
        background:'#444',
      };
    case CODE.OPEND:
      return{
        background:'#fff',
      };
    default:
      return{
        background:'#fff',
      };
  }
}
const getTdText= (code)=>{
  switch(code){
    case CODE.NORMAL :
      return ''; 
    case CODE.MINE : 
      return 'O'
  }
}

const Td = ({rowIndex, cellIndex})=> {
const {tableData} = useContext(TableContext)
  return(
      <td style={getTdStyle(tableData[rowIndex][cellIndex])}>{getTdText(tableData[rowIndex][cellIndex])}</td>
  )
}

export default Td