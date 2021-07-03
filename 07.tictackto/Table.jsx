import React,{ useReducer , useCallback , useEffect} from 'react';
import Tr from './Tr'

const Table = ({state, tableData, dispatch}) => {
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














// import React from 'react';
// import Tr from './Tr'

// const Table = ({onClick , tableData, dispatch})=>{
//   return (
//     <table>
//       {Array(tableData.length).fill().map((tr, i)=><Tr rowIndex={i} rowData={tableData[i]} dispatch={dispatch}/> )}  
//     </table>
//   )
// }

// export default Table