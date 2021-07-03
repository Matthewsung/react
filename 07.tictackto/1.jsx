import React, {useState, useCallback,useEffect, useReducer} from 'react'
import Two from './2'
const initialState={
  text:'HELLO',
  num: 1,
};
export const AAA = 'AAA';
export const BBB = 'BBB';
export const CCC = 'CCC';
const reducer=(state, action)=>{
  switch(action.type){
    case AAA:
      return{
        ...state,
        num:action.num,
      }
    case BBB:
      return{
        ...state,
        num:action.num
      }
    case CCC:
      return{
        ...state,
        text:action.text,
      }
  }
};

const One = ()=>{
  const [state, dispatch] = useReducer(reducer,initialState)
  const onClickDiv = useCallback(()=>{
    if(state.num == 1){
      dispatch({ type: AAA, num:2})
    }
    else if(state.num == 2){
      dispatch({ type: BBB, num:1})
    }
  },[state.num])
  

  return (
    <>
      <div id="div" onClick={onClickDiv}>{state.num}</div>
      <Two state={state.text} dispatch={dispatch}/>
    </>
  )
};

export default One
