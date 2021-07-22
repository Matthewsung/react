import {Link} from 'react-router-dom'
const ApiCountry = ({country})=>{
  
  return(    
    <li className='country_li' >
      <Link to={`/${country.Country}`}>
       {country.Country}
      </Link>
    </li>
  )
}
export default ApiCountry