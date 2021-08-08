import { ADD_CART, REMOVE_CART } from "./action";

const initialState = {
  data:{}
}
//데이터 불러오기 reducer


// 카트를 위한 reducer
const dataReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_CART:
      return{
        ...state,
      }
    case REMOVE_CART:
      return{
        ...state,
      }
    default : return state;
  }
}

export default dataReducer