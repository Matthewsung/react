export const ADD_CART = 'ADD_CART'
export const REMOVE_CART = 'REMOVE_CART'

export const addcart = () => {
  return{
    type: ADD_CART
  }
}

export const removecart = () => {
  return{
    type: REMOVE_CART
  }
}