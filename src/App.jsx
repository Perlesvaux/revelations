//import { useState, Suspense, lazy, useEffect } from 'react'
import { useState, useEffect, useReducer } from 'react'
import './App.module.css'
import Section from './Section.jsx'
import Video from './Video.jsx'
import Renew from './Renew.jsx'

const initialState = 
  [
    {
      full: false,
      title: "Body-count does (not) matter" ,
      contents:[
        { src:"https://www.youtube.com/embed/lqvgVeq-nso", topic:"Patrick Bateman (no) existe" }, 
        { src:"https://www.youtube.com/embed/3XHhpjbPM40", topic:"¿Tan largo me lo fiáis...?" },
      ]
    },
    {
      full: false,
      title: "The end of history (?)",
      contents:[
        { src:"https://www.youtube.com/embed/ebvZExtrmLY", topic:"Supply and demand" },
        { src:"https://www.youtube.com/embed/IrNQeYYvabg", topic:"⚡ Shock Therapy ⚡" },
        { src:"https://www.youtube.com/embed/AAHrkNOGME0", topic:"There should be another way 🤔" },
        { src:"https://www.youtube.com/embed/8GWKsCOPb7E", topic:"A New Hope!" },
      ] 
    },
    {
      full:false,
      title:"T.S. Elliot - The Wasteland",
      contents:[
        { src:"https://www.youtube.com/embed/zxhSthZ9fqU", topic:"Girl Boss - YASS QUEEN! 💅🏻💄" },
        { src:"https://www.youtube.com/embed/r2GzzjSysPA", topic:"$HUMAN/USD" }, 
        { src:"https://www.youtube.com/embed/A4uyEhvcqu0", topic:"W@H" },
        { src:"https://www.youtube.com/embed/y91lMxIrf14", topic:"Pinball, 1973" },
      ]
    },
    {
      full:false,
      title:"Cui Bono?",
      contents: [
        { src:"https://www.youtube.com/embed/EmnVTiST7yM" , topic:"El Sabio de Rosario" },
        { src:"https://www.youtube.com/embed/FeeybWCfuf0" , topic:"Libertad" },
        { src:"https://www.youtube.com/embed/IQ1oaE5vCuA" , topic:"Todo para MI y para SIEMPRE 😈" },
        { src:"https://www.youtube.com/embed/ZodfIsGdw5g" , topic:"Menos modernidad, Mas Chesterton" },
      ]
    },
    {
      full:false,
      title:"Libre examen",
      contents: [
        { src:"https://www.youtube.com/embed/_5LS2lRNEwI", topic:"Islam Aesthetic y Coquette 🎀" },
        { src:"https://www.youtube.com/embed/mZcrXKWYdm0", topic:"Calvino y Lutero. Depredación" },
        { src:"https://www.youtube.com/embed/CfRvIvNcBcE", topic:"Les franchutes ont encore récidivé - I" },
        ]
    },
    {
      full:false,
      title:"Symploké",
      contents:[
        { src:"https://www.youtube.com/embed/FLZGi9PKRaE", topic:"Separar la paja del trigo" },
        { src:"https://www.youtube.com/embed/d5CKfOTYc3o", topic:"The brits are at it again - I" },
        { src:"https://www.youtube.com/embed/cW7nBS-3wCg", topic:"Les franchutes ont encore récidivé - II" },
        { src:"https://www.youtube.com/embed/bmmmObyblbo", topic:"Irene Montero" },
      ]
    },
    {
      full:false,
      title:"Red White & Blue 🇬🇧",
      contents:[
        { src:"https://www.youtube.com/embed/qFn5wHQqWaE", topic:"1717" },
        { src:"https://www.youtube.com/embed/BmMzllvtrIg", topic:"The brits are at it again - II (Marvel)" },
        { src:"https://www.youtube.com/embed/CHs1PF_cKLo", topic:"Brits rare W" },
        { src:"https://www.youtube.com/embed/DoEbh_BGL2I", topic:"Piratas Gringos" },
      ]
    },
    {
      full:false,
      title:"Event Horizon", 
      contents: [
        {  src:"https://www.youtube.com/embed/XibCflWxZuA",  topic:"AMOGUS" },
        {  src:"https://www.youtube.com/embed/_2khAmMTAjI",  topic:"Las Cloacas" },
        {  src:"https://www.youtube.com/embed/DVAPARGgQVY",  topic:"Kensington PA" },
        {  src:"https://www.youtube.com/embed/33p-8QHZpzY",  topic:"🏳️‍🌈" },
        {  src:"https://www.youtube.com/embed/bd9nBywsnfc",  topic:"YASSSSS QUEEEEEN 💅🏻💄" },
        {  src:"https://www.youtube.com/embed/_YCQV_iUGRE",  topic:"Depredasion 🌈" },
        {  src:"https://www.youtube.com/embed/e-Tgv-ABoZ4",  topic:"Depredation" },
      ]
    },

  ]

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
      <div className="saluton">
        <p>Lucha contra el <strong>Brainrot</strong>. Manten registro de tu progreso. Cero anuncios ;D</p>
      </div>

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

      <button onClick={()=>{ setWatchList([]); setRenew(true) }}>
        { renew ? <span>History reseted - Refresh your browser!</span> : <Renew fill="thistle" size="24px" />   }
      </button>

    </>
  )
}
