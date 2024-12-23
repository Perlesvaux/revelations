import {useState} from 'react'
import Dialog from './Dialog.jsx'
import Up from './Up.jsx'
import Down from './Down.jsx'

export default function Video({ topic, children }){
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

        {children}

      </Dialog></>
}

