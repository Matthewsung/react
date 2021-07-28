import React,{ useReducer , useCallback , useEffect} from 'react';
import Tr from './Tr'

const Table = ({state, tableData, dispatch}) => {
  // console.log(tableData)
  return(
    <table>
      <tbody>
        {Array(tableData.length).fill().map((v,i)=> <Tr 
        key={i+'입니다'} 
        state={state}
        TrIndex={i} 
        TrData={tableData[i]} 
        dispatch={dispatch}/>)}
      </tbody>
    </table>
  )
}

export default Table


