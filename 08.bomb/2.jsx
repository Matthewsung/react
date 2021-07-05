import React,{createContext, useReducer,useMemo,useContext} from 'react';
import {table} from './1'
const BBB = ()=>{
  const tmp = useContext(table)
  return(
    <>
      <p>{tmp}</p>
    </>
  )

}

export default BBB