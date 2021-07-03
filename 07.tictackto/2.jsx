import React, {useCallback, useReducer}from 'react'
import { CCC } from './1'

const Two = ({state, dispatch})=>{
// console.log(CCC)
  const onClickText = useCallback(()=>{
    // dispatch({ type: CCC, text:'메롱'})
    if(state == "HELLO"){
      dispatch({type:CCC, text:'메롱'});
      console.log(state)
    }
    else if(state == '메롱'){

      dispatch({type:CCC, text:'HELLO'});
    }
  },[state])


  return (
    <>
      <div onClick={onClickText}>안녕하세요///{state}</div>
    </>
  )
}

export default Two
