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
  
  useEffect(()=>{
    markAsCompleted()
  }, [watchList])


  return(
    <section className={`${styles.card} ${isFull && styles.full}`} >
      
      <button 
        className={styles.onoff} 
        onClick={()=>{setVisibility(!visibility)}}
      > 
        { visibility? <Up fill="pink" size="30px" /> : <Down fill="cyan" size="30px" />  } { title && title }  
      </button>

      {
        visibility && 
        <div className={styles.visible} >
          {children}
        </div>
      }

    </section>
  )
}
