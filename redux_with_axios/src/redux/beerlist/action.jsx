import axios from 'axios';

export const GET_DATA = 'GET_DATA';

export const getData = async (getData) => {
  return {
    type:GET_DATA,
    payload : getData
  }
}