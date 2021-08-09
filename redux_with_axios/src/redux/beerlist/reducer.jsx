import { GET_DATA, SELECTED_DATA } from './action'
const initialState = {
  getData : [],
  selectedData : []
}

export const getDataReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_DATA:
      return {
        ...state,
        getData : action.payload 
      }

    case SELECTED_DATA:
      return {
        ...state,
        selectedData : action.payload 
      }
      
    default: return state;
  }
}