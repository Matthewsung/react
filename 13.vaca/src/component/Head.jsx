import styles from './Head.module.css'
const Head = ({db})=>{
  
  console.log(db.day)

  return(
    <>
      <h1 className={styles.title}>VOCA</h1>
      <ul>
        {/* {} */}
        {/* <li>Day {db.day}</li> */}
      </ul>
    </>
  )
}
export default Head