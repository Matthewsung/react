import React,{ useReducer , useCallback , useEffect} from 'react';
import Td from './Td'
const Tr = ({state, tableData, TrIndex, TrData, dispatch}) => {
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





// import React from 'react';
// import Td from './Td'

// const Tr = ({ rowData, rowIndex , dispatch})=>{
//   return (
//     <tr>
//       {Array(rowData.length).fill().map((td,i)=> <Td cellData ={rowData[i]} cellIndex={i} rowIndex={rowIndex} dispatch={dispatch}/> )}
//     </tr>
//   )
// }

// export default Tr

