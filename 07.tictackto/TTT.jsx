import React,{ useReducer , useCallback , useEffect} from 'react';
import Table from './Table';

const initialState ={
  winner:'',
  turn:'O',
  tableData:[['','',''],['','',''],['','','']]
};

export const SELECT_CELL ='SELECT_CELL'
export const CHANGE_TURN ='CHANGE_TURN'
const WINNER = 'WINNER'
const reducer =(state, action)=>{
  switch(action.type){
    case SELECT_CELL:
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]]
      tableData[action.row][action.cell] = state.turn;
      return{
        ...state,
        tableData:tableData,
      }
    case CHANGE_TURN:
      return{
        ...state,
        turn:action.turn
      }
    case WINNER:
      return{
        ...state,
        winner:action.winner
      }
  }
};
const Tick = () => {
  // console.log(state.row, state.cell)
  const [state, dispatch] = useReducer(reducer,initialState);

  useEffect(()=>{
    let win =false;
    if(state.state.tableData[row][0] == turn &&state.tableData[row][1] == turn &&state.tableData[row][2] == turn ){
      win = true;
    }
    if(state.state.tableData[0][cell] == turn &&state.tableData[1][cell] == turn &&state.tableData[2][cell] == turn ){
      win = true;
    }
    if(state.state.tableData[0][0] == turn &&state.tableData[1][1] == turn &&state.tableData[2][2] == turn ){
      win = true;
    }
    if(state.state.tableData[2][0] == turn &&state.tableData[1][1] == turn &&state.tableData[0][2] == turn ){
      win = true;
    }
    if(win){
      dispatch({type:WINNER, winner:turn})
    }

  },[])
  // dispatch(()=>{
  //   if(state.state.tableData[row][0] == turn &&state.tableData[row][1] == turn &&state.tableData[row][2] == turn ){
  //     return {type:'WINNER'}
  //   }
  //   if(state.state.tableData[0][cell] == turn &&state.tableData[1][cell] == turn &&state.tableData[2][cell] == turn ){
  //     return {type:'WINNER'}
  //   }
  //   if(state.state.tableData[0][0] == turn &&state.tableData[1][1] == turn &&state.tableData[2][2] == turn ){
  //     return {type:'WINNER'}
  //   }
  //   if(state.state.tableData[2][0] == turn &&state.tableData[1][1] == turn &&state.tableData[0][2] == turn ){
  //     return {type:'WINNER'}
  //   }
  // })
  return(
    <>
      <Table state={state} tableData={state.tableData} dispatch={dispatch}/>
    </>
  )
}

export default Tick














// import React, { useState , useReducer ,useCallback, useEffect} from 'react';
// import Table from './Table';
// const initialState = {
//   winner:'',
//   turn:'O',
//   tableData: [['','',''],['','',''],['','','']],
//   recentCell : [-1,-1]
// }
// export const SET_WINNER = 'SET_WINNER'
// export const CLICK_CELL = 'CLICK_CELL'
// export const CHANGE_TURN = 'CHANGE_TURN'


// const reducer = (state, action)=>{
//   switch(action.type){
//     case SET_WINNER:
//       return {
//         ...state,
//         winner:action.winner,
//       }
//     case CLICK_CELL:{
//       const tableData =[...state.tableData];
//       tableData[action.row] = [...state.tableData[action.row]];
//       tableData[action.row][action.cell] = state.turn;
//       return{
//         ...state,
//         tableData,
//         recentCell:[action.row, action.cell]
//       }
//     }
//     case CHANGE_TURN:{
//       return {
//         ...state,
//         turn:state.turn === 'O'?'X':'O',
//       }
//     }
//   }
// }
// const TTTo =( ) => {
//   const [state, dispatch] = useReducer(reducer,initialState)

//   const onClickTable = useCallback(() => {
//     dispatch({ type:SET_WINNER, winner:'O' })
//   }, [])

//   // useEffect(()=>{
//   //   let win = false;
//   //   if(tableData[row][0] ==turn &&tableData[row][1] ==turn &&tableData[row][2] ==turn ){
//   //     win = true;
//   //   }
//   //   if(tableData[0][cell] ==turn &&tableData[1][cell] ==turn &&tableData[2][cell] ==turn ){
//   //     win = true;
//   //   }
//   //   if(tableData[0][0] ==turn &&tableData[1][1] ==turn &&tableData[2][2] ==turn ){
//   //     win = true;
//   //   }
//   //   if(tableData[0][2] ==turn &&tableData[1][1] ==turn &&tableData[2][0] ==turn ){
//   //     win = true;
//   //   }
//   // },[tableData])

//   return (
//     <>
//       <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch}/>
//       {state.winner && <div>{state.winner}님의 승리</div>}
//     </>
//   )
// }

// export default TTTo