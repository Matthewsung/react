import {Link} from 'react-router-dom'
const ApiCountry = ({country})=>{
  // console.log(country)  
  return(    
    <li className='country_li' >
      <Link to={{
        pathname:`/${country.Country}`,
        state:{
          country:country
        }
      }} >
       {country.Country}
      </Link>
    </li>
  )
}
export default ApiCountry