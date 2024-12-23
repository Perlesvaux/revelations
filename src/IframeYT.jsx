import { useState, Suspense, lazy, useEffect } from 'react'
import Dialog from './Dialog.jsx'
import LoadingScreen from './LoadingScreen.jsx'

export default function IframeYt({ topic, src }){
  const [modal, setModal] = useState(false)
  const [watched, setWatched] = useState(false)

    return <>
      <button 
        className={ `btn btn-${watched? 'success' : 'secondary'} text-${watched? 'dark' : 'white'}` } 
        onClick={()=> setModal(true)} 
      > 
        <strong>{ topic }</strong> 

      </button> 

      <Dialog closeModal={()=>{setModal(false); setWatched(true)}} openModal={modal}>
        <Suspense fallback={ <LoadingScreen /> }>
          <iframe
              width="100%" 
              height="600px"
              title={ topic && topic}
              frameBorder="0"  
              allowFullScreen
              src={ modal && src }
            />
        </Suspense>
      </Dialog></>
}




//export default function IframeYt({isPlaying, src, title}){
//
//  return (<iframe
//    width="100%" 
//    height="600px"
//    title={ title && title}
//    frameBorder="0"  
//    allowFullScreen
//    src={ isPlaying && src }
//  />)
//}
