import './Section.module.css'
//import { useState } from 'react'
import { useState, useEffect } from 'react'
//import React, { useState, useRef, useEffect } from 'react'
//import React, { useState, useEffect } from 'react'
//import React, { useState } from 'react'
import Down from './Down.jsx'
import Up from './Up.jsx'

export default function Section({title, children}){
  const [visibility, setVisibility] = useState(false)
  const [isFull, setIsFull] = useState(()=>{
    const viewedAlready = localStorage.getItem("_watched_") || []
    const containedVideos = children.map(child => child.props.topic )
    const completed = containedVideos.every((elem)=> viewedAlready.includes(elem))
    console.log(completed)
    return completed
  })

  function markAsCompleted(){
    console.log("from func")
    const viewedAlready = localStorage.getItem("_watched_") || []
    console.log(children)
    const containedVideos = children.map(child => child.props.topic )
    const completed = containedVideos.every((elem)=> viewedAlready.includes(elem))
    setIsFull(completed)
  }


  //useEffect(() => {
  //  const viewedAlready = localStorage.getItem("_watched_") || []
  //  let containedVideos = []
  //  React.Children.forEach(children, (child) => {
  //    if (React.isValidElement(child)) {
  //      containedVideos.push(child.props.topic)
  //    }
  //  })
  //  const completed = containedVideos.every((elem)=> viewedAlready.includes(elem))
  //  console.log(completed)
  //  setIsFull(completed)
  //
  //} )
  
  useEffect(()=>{
    console.log("from useEffect", isFull)
    markAsCompleted()

  }, [isFull])




  return(
  <section className={`card ${ isFull? "bg-success" : ""} `} onClick={markAsCompleted}>
    
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
