import React,{useState, useCallback, useEffect, useReducer, useContext} from 'react'
import Td from './td'
import { TableContext } from './bomb'
const Tr = ({rowIndex})=> {
  const {tableData} = useContext(TableContext)
  return(
    <tr>
      {Array(tableData[0].length).fill().map((v,i)=><Td key={"td"+i} rowIndex={rowIndex} cellIndex={i}/>)}
    </tr>
  )
}

export default Tr