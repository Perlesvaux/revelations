import './Section.module.css'
import { useState } from 'react'
import Down from './Down.jsx'
import Up from './Up.jsx'

export default function Section({title, children}){
  const [visibility, setVisibility] = useState(false)
  return(
  <section className="card">
    
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
