//import { useState, Suspense, lazy, useEffect } from 'react'
import { useState, useEffect, useReducer } from 'react'
import styles from './App.module.css'
import Section from './Section.jsx'
import Video from './Video.jsx'
import Renew from './Renew.jsx'
import videoCollection from './videoCollection.js'

const initialState = videoCollection

function reducer(state, action) {
  switch(action.type){
    case "completed":
    return state.map( (elem, indx) => indx === action.indx ? { ...elem, full:true } : elem )

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export default function App() {
  const [renew, setRenew] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)
  const [watchList, setWatchList] = useState(() => {
    const saved = localStorage.getItem("_watched_");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("_watched_", JSON.stringify(watchList));
  }, [watchList]);


  function addToWatchList(topic) {
    console.log(topic)
    setWatchList((prevWatchList) => {
      const updated = [...prevWatchList, topic];
      return [...new Set(updated)]; // Ensure unique entries
    });
  }

  return (
    <>

      <p>Lucha contra el <strong>Brainrot</strong>. Manten registro de tu progreso. Cero anuncios ;D</p>

      {
        state.map((section, section_indx)=>(
          <Section key={section_indx} title={section.title} isFull={section.full} watchList={watchList}  issues={ ()=>dispatch({type:"completed", indx:section_indx}) } >
            {
              section.contents.map((video, video_indx)=> (
              <Video key={video_indx} topic={video.topic} src={video.src} addToWatchList={addToWatchList} />
              ))
            }
          </Section>
        ))
      }

      <button 
        className={renew ? styles.reseted : styles.reset}
        onClick={()=>{ setWatchList([]); setRenew(true) }}
      >
        { renew ? <span>History reseted - Refresh your browser!</span> : <Renew fill="black" size="24px" />   }
      </button>

    </>
  )
}
