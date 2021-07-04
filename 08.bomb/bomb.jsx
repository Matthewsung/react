import React,{useState, useCallback, useEffect, useReducer, createContext, useMemo} from 'react';
import Table from './table';
import Form from './Form';

export const TableContext = createContext({
  tableData:[],
  dispatch: ()=>{},
})
export const START_GAME ='START_GAME'
const initialState={
  timer: 0,
  result:'',
  
}
const reducer = (state, action)=>{
  switch(action.type){
    case START_GAME:
      return{
        ...state,
        tableData:plantMine(action.row,action.cell, action.mine)
      }
    default : 
    return state;
  }
}
const Boom = ()=> {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(()=>({tableData:state.tableData, dispatch}),[state.tableData])
  return(
    <TableContext.Provider value={value}>
      <Form/>
      <div>{state.timer}</div>
      <Table />
      <div>{state.result}</div>
    </TableContext.Provider>
  )
}

export default Boom