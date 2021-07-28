import React,{ useReducer , useCallback , useEffect, Memo} from 'react';
import {SELECT_CELL, CHANGE_TURN} from './Main'
const Td = ({state,TrIndex, TdIndex, TdData, dispatch}) =>{
  const onClickTd= useCallback(() => {
    if(TdData){
      return;
    }
    dispatch({type:SELECT_CELL, row:TrIndex, cell:TdIndex})
    
  },[TdData])
  
  return(
    <td onClick={onClickTd}>{TdData}</td>
    // Memo(<td onClick={onClickTd}>{TdData}</td>)
  ) 
}

export default Td
