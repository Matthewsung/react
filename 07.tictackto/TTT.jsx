import React,{ useReducer , useCallback , useEffect} from 'react';
import Table from './Table';

const initialState ={
  winner:'',
  turn:'O',
  tableData:[['','',''],['','',''],['','','']],
  recent:[-1, -1]
};

export const SELECT_CELL ='SELECT_CELL'
export const CHANGE_TURN ='CHANGE_TURN'
const RESET_GAME = 'RESET_GAME'
const WINNER = 'WINNER'
const reducer =(state, action)=>{
  switch(action.type){
    case SELECT_CELL:
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]
      tableData[action.row][action.cell] = state.turn;
      return{
        ...state,
        tableData,
        recent:[action.row,action.cell]
      }
    case CHANGE_TURN:
      return{
        ...state,
        turn:state.turn == 'O'? 'X':'O'
      }
    case WINNER:
      return{
        ...state,
        winner:action.winner
      }
    case RESET_GAME:
      return{
        ...state,
        turn:'O',
        tableData:[['','',''],['','',''],['','','']],
        recent:[-1, -1]
      }
  }
};
const Tick = () => {
  const [state, dispatch] = useReducer(reducer,initialState);
  const {tableData, turn, winner, recent} = state

  useEffect(()=>{
    const [row,cell] = recent;

    if(row < 0){
      return;
    }
    let win =false;
    if(tableData[row][0] == turn && tableData[row][1] == turn && tableData[row][2] == turn ){
      win = true;
    }
    if(tableData[0][cell] == turn &&tableData[1][cell] == turn &&tableData[2][cell] == turn ){
      win = true;
    }
    if(tableData[0][0] == turn &&tableData[1][1] == turn &&tableData[2][2] == turn ){
      win = true;
    }
    if(tableData[2][0] == turn &&tableData[1][1] == turn &&tableData[0][2] == turn ){
      win = true;
    }
    if(win){
      dispatch({type:WINNER, winner:turn})
      dispatch({type:RESET_GAME})
    } else{
        let all = true;
      tableData.forEach((row)=>{
        row.forEach((cell)=>{
          if(!cell){
            all = false;
          }
        })
      })
      if(all){
        dispatch({type:RESET_GAME})
      }else{
        dispatch({type:CHANGE_TURN})
      }
    }
    
  },[recent])
  
  return(
    <>
      <Table state={state} tableData={state.tableData} dispatch={dispatch}/>
      {winner?<h1>{state.winner}??? ???????????????</h1>: <h1>??????????????????</h1>} 
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
//       {state.winner && <div>{state.winner}?????? ??????</div>}
//     </>
//   )
// }

// export default TTTo