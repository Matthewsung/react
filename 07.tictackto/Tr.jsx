import React,{ useReducer , useCallback , useEffect} from 'react';
import Td from './Td'
const Tr = ({tableData, TrIndex, TrData, dispatch}) => {
  return(
    <tr>
      {Array(TrData.length).fill().map(( v , i )=> <Td key={i+'이다'} 
      dispatch={dispatch} 
      TdData={TrIndex[i]} 
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

