import React,{ useReducer , useCallback , useEffect} from 'react';
import Td from './Td'
const Tr = () => {

  return(
      <tbody>
      <Td />
      </tbody>
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

