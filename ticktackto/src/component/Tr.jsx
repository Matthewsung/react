import React,{ useReducer , useCallback , useEffect} from 'react';
import Td from './Td'
const Tr = ({state, TrIndex, TrData, dispatch}) => {
  // console.log(state)
  // console.log(TrIndex)
  // console.log(TrData)
  return(
    <tr>
      {Array(TrData.length).fill().map(( v , i )=> <Td key={i+'이다'} 
      dispatch={dispatch} 
      state={state}
      TdData={TrData[i]} 
      TdIndex={i}
      TrIndex={TrIndex} />)}
    </tr>
  )
};

export default Tr
