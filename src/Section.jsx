import { useState } from 'react'
//import Dialog from './Dialog.jsx'
import Down from './Down.jsx'
import Up from './Up.jsx'

export default function Section({title, children}){
  const [visibility, setVisibility] = useState(false)
  return(
  <div className="card" style={{rowGap: "1em", width:"100%"}}>
    
    <button 
        onClick={()=>{setVisibility(!visibility)}}
    > 
        <strong style={{fontSize:"20px"}}> { title && title }  { visibility? <Up fill="red" size="30px" /> : <Down fill="cyan" size="30px" />  } </strong> 

    </button>
      { visibility &&
        ( 
          children
        )
      }
  </div>
  )
}

      //<button onClick={()=>{setVisibility(!visibility)}}> ok </button>
      //{visibility && children}
