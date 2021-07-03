import React,{ useReducer , useCallback , useEffect} from 'react';
const Td = () =>{

  return (
    <tr>
      <td>안녕</td>
    </tr>
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