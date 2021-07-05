import React,{useState, useCallback, useEffect, useReducer, useContext} from 'react'
import Table from './table'
import { CODE, OPEN_CELL, CLICK_MINE ,FLAG_CELL, QUESTION_CELL, NORMALIZE_CELL} from './bomb'
import { TableContext } from './bomb';
const getTdStyle = (code)=>{
  switch(code){
    case CODE.NORMAL : 
    case CODE.MINE : 
      return{
        background:'#444',
      };
    case CODE.OPEND:
    case CODE.CLICKED_MINE:
      return{
        background:'#fff',
      };
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return{
        background:'yellow',
      };
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return{
        background:'red',
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
    case CODE.CLICKED_MINE : 
      return '펑'
    case CODE.FLAG_MINE :
    case CODE.FLAG : 
      return '!!'
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return '??'
    default : 
      return code == 0?'':code
  }
}
const Td = ({rowIndex, cellIndex })=> {
const {tableData, dispatch, halted} = useContext(TableContext)

const onClickTd = useCallback( () => {
  if(halted){
    return;
  }
  switch( tableData[rowIndex][cellIndex] ){
    case CODE.OPENED: 
    case CODE.FLAG: 
    case CODE.FLAG_MINE: 
    case CODE.QUESTION: 
    case CODE.QUESTION_MINE: 
      return;
    case CODE.NORMAL: 
      return(
        dispatch({type:OPEN_CELL, row:rowIndex, cell:cellIndex})
      )
    case CODE.MINE: 
      return(
        dispatch({type:CLICK_MINE, row:rowIndex, cell:cellIndex})
      )
  }
}, [tableData[rowIndex][cellIndex], halted])
const onRightClicked= useCallback((e)=>{
  if(halted){
    return; 
  }
  e.preventDefault();
  switch( tableData[rowIndex][cellIndex]){
    case CODE.NORMAL:
    case CODE.MINE:
      return(
        dispatch({type:FLAG_CELL, row:rowIndex, cell:cellIndex})
      )
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return(
        dispatch({type:QUESTION_CELL, row:rowIndex, cell:cellIndex})
      )
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return(
        dispatch({type:NORMALIZE_CELL, row:rowIndex, cell:cellIndex})
      )
    return;
    default:
      return ;
  }
},[tableData[rowIndex][cellIndex], halted])
  return(
      <td style={getTdStyle(tableData[rowIndex][cellIndex])} onClick={onClickTd} onContextMenu={onRightClicked}>
        {getTdText(tableData[rowIndex][cellIndex])}
      </td>
  )
}

export default Td