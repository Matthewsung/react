import React,{ useContext} from 'react'
import Tr from './tr'
import { TableContext } from './bomb';

const Table = ({value})=> {

  const { tableData } = useContext(TableContext);
  return(
    <table>
      <tbody>
        {Array(tableData.length).fill().map((v, i)=><Tr key={"tr"+i} rowIndex={i}/>)}
      </tbody>
    </table>
  )
}

export default Table