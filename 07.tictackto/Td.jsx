import React,{ useReducer , useCallback , useEffect} from 'react';
import {SELECT_CELL, CHANGE_TURN} from './TTT'
const Td = ({state,tableData,TrIndex, TdIndex, TdData, dispatch}) =>{
  const onClickTd= () => {
    if(TdData){
      return;
    }
    dispatch({type:SELECT_CELL, row:TrIndex, cell:TdIndex})
    dispatch({type:CHANGE_TURN, turn:state.turn == 'O'? 'X':'O'})
    // console.log(TrIndex, TdIndex)
  }
  return (
    <td onClick={onClickTd}>{TdData}</td>
  )
}

export default Td


// import React, { useCallback } from 'react';
// import { CLICK_CELL, CHANGE_TURN } from './TTT';

// const Td = ({ rowIndex, cellIndex,dispatch, cellData } )=>{
//   const onClickTd = useCallback(()=>{
//     console.log(rowIndex, cellIndex);
//     if(cellData){
//       return;
//     }
//     dispatch({type:CLICK_CELL, row:rowIndex, cell:cellIndex});
//     dispatch({type:CHANGE_TURN});
//     console.log(tableData)
//   },[cellData]);
    
//   return (
//     <td onClick={onClickTd}>{cellData}</td>
//   )
// }
// export default Td