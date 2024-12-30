import { useState, useEffect } from 'react'
import Down from './Down.jsx'
import Up from './Up.jsx'
import styles from './Section.module.css'

export default function Section({title, isFull, watchList, issues, children}){
  const [visibility, setVisibility] = useState(false)

  function markAsCompleted(){
    const containedVideos = children.map(child => child.props.topic )
    const completed = containedVideos.every((elem)=> watchList.includes(elem))
    if (completed) issues()
  }
  //
  useEffect(()=>{
    console.log("from useEffect", isFull)
    markAsCompleted()
  }, [watchList])


  return(
  <section className={`card ${styles.card} ${ isFull? `${styles.full}` : ""} `} >
      {console.log(isFull)}
    
    <button 
        onClick={()=>{setVisibility(!visibility)}}
    > 
        <h3> { title && title }  { visibility? <Up fill="red" size="30px" /> : <Down fill="cyan" size="30px" />  } </h3> 

    </button>
      { visibility &&
        ( 
          children
        )
      }
  </section>
  )
}
