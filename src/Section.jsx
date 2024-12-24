import styles from './Section.module.css'
//import { useState } from 'react'
import { useState, useEffect } from 'react'
//import React, { useState, useRef, useEffect } from 'react'
//import React, { useState, useEffect } from 'react'
//import React, { useState } from 'react'
import Down from './Down.jsx'
import Up from './Up.jsx'

export default function Section({title, isFull, watchList, issues, children}){
  const [visibility, setVisibility] = useState(false)
  //const [isFull, setIsFull] = useState(()=>{
  //  const viewedAlready = localStorage.getItem("_watched_") || []
  //  const containedVideos = children.map(child => child.props.topic )
  //  const completed = containedVideos.every((elem)=> viewedAlready.includes(elem))
  //  return completed
  //})
  //
  function markAsCompleted(){
    const viewedAlready = watchList
    //const viewedAlready = localStorage.getItem("_watched_") || []
    const containedVideos = children.map(child => child.props.topic )
    const completed = containedVideos.every((elem)=> viewedAlready.includes(elem))

    console.log(containedVideos, viewedAlready, completed)
    if (completed) issues()
  }
  //
  useEffect(()=>{
    console.log("from useEffect", isFull)
    markAsCompleted()

    return ()=>  markAsCompleted()

  }, [watchList])
  //
  //
  ////console.log(children.length)



  return(
  <section className={`card ${ isFull? `${styles.full}` : ""} `} >
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
