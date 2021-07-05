import React,{createContext, useReducer, useMemo} from 'react';
import BBB from './2'
export const table = createContext ({
  tmp:'123',
  tmp2:[[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]
})
const AAA = ()=>{
  const value = useMemo(()=>({tmp:table.tmp, tmp2:table.tmp2}),[])
  return(
    <table.Provider value={value}>
      <BBB />
    </table.Provider>
  )

}

export default AAA