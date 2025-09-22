import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'
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

  }, [isReady, modal]
  )

    return <div key={`${watched? 'on' : 'off'}`} className="w-full">
      <button 
        className={ watched 
          ?   `bg-slate-300/90 hover:bg-slate-400/90 text-rose-950 text-shadow-md w-full`
          :   `bg-stone-400/90 hover:bg-stone-500/90 text-stone-100 text-shadow-md w-full`} 
        onClick={()=> { setModal(true);  addToWatchList(topic); }  } 
      > 
        <strong>{ topic }</strong> 

      </button> 

      <Dialog  closeModal={()=>{setModal(false); setIsReady(true) }} openModal={modal}>

        { !isReady && <aside className="h-[600px] flex flex-col justify-center items-center"> <LoadingScreen taste="dotted" color="blue"/></aside> }
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

Video.propTypes = {
  topic: PropTypes.string.isRequired, 
  src: PropTypes.string.isRequired,
  addToWatchList: PropTypes.func.isRequired
};
