export const GET_DATA = 'GET_DATA';
export const SELECTED_DATA = 'SELECTED_DATA';

export const getData = (data) => {
  return {
    type:GET_DATA,
    payload:data
  }
}
export const selectedData = (data) => {
  return {
    type:SELECTED_DATA,
    payload:data
  }
}