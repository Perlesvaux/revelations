import { useState } from 'react'
import "./Video.module.css"
//import { useState, Suspense, lazy, useEffect } from 'react'
//const Dialog = lazy(()=> import('./Dialog.jsx'))
import Dialog from './Dialog.jsx'
import LoadingScreen from './LoadingScreen.jsx'

export default function Video({ topic, src }){
  const [modal, setModal] = useState(false)
  const [watched, setWatched] = useState(false)
  const [isReady, setIsReady] = useState(false)

    return <>
      <button 
        className={ `btn btn-${watched? 'primary' : 'secondary'} text-${watched? 'dark' : 'white'}` } 
        onClick={()=> { setModal(true); setIsReady(false) }  } 
      > 
        <strong>{ topic }</strong> 

      </button> 

      <Dialog  closeModal={()=>{setModal(false); setWatched(true)}} openModal={modal}>

        { !isReady && <aside> <LoadingScreen taste="dotted" color="blue"/></aside> }
          <iframe
              width="100%" 
              height="600px"
              title={ topic ? topic : '' }
              frameBorder="0"  
              allowFullScreen
              src={ modal ? src : '' }
              onLoad={() => setIsReady(true)}
              style={{ display: isReady ? "block" : "none" }}
          />

      </Dialog>
      </>
}
