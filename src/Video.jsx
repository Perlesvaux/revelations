import { useState, useEffect } from 'react'
import styles from "./Video.module.css"
//import { useState, Suspense, lazy, useEffect } from 'react'
//const Dialog = lazy(()=> import('./Dialog.jsx'))
import Dialog from './Dialog.jsx'
import LoadingScreen from './LoadingScreen.jsx'

export default function Video({ topic, src, addToWatchList }){
  const [modal, setModal] = useState(false)
  const [watched, setWatched] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(()=>{

    setWatched(() => {
        const saved = localStorage.getItem("_watched_");
        return saved ? JSON.parse(saved).includes(topic) : false;
      })

    //setWatched( localStorage.getItem("_watched_").includes(topic) || []   )
  }, [isReady, modal]
  )

    return <div key={`${watched? 'on' : 'off'}`}>
      <button 
        //className={ `btn btn-${watched? 'primary' : 'secondary'} text-${watched? 'dark' : 'white'}` } 
        className={ watched ? styles.primary : styles.secondary } 
        onClick={()=> { setModal(true);  addToWatchList(topic); }  } 
        //onClick={()=> { setModal(true); setIsReady(false); addToWatchList(topic); }  } 
      > 
        <strong>{ topic }</strong> 

      </button> 

      <Dialog  closeModal={()=>{setModal(false); setIsReady(true) }} openModal={modal}>

        { !isReady && <aside className={styles.loadingplaceholder}> <LoadingScreen taste="dotted" color="blue"/></aside> }
          <iframe
              autoFocus
              width="100%" 
              height="600px"
              title={ topic ? topic : '' }
              frameBorder="0"  
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              //src={ modal ? src : '' }
              src={ src }
              onLoad={() => setIsReady(true)}
              style={{ display: isReady ? "block" : "none" }}
          />

      </Dialog>
      </div>
}
