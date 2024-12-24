//import { useState, Suspense, lazy, useEffect } from 'react'
import { useState, useEffect, useReducer } from 'react'
import './App.css'
import Section from './Section.jsx'
import Video from './Video.jsx'
import Renew from './Renew.jsx'

const initialState = {
  n1: false,
  n2: false,
  n3: false,
  n4: false,
  n5: false,
  n6: false,
  n7: false,
  n8: false
}

function reducer(state, action) {
  switch(action.type){
    case "completed":
    return {...state, [action.field]:true}

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


  //useEffect(() => {
  //}, [state])
  

  function addToWatchList(topic) {
    setWatchList((prevWatchList) => {
      const updated = [...prevWatchList, topic];
      return [...new Set(updated)]; // Ensure unique entries
    });
  }

  return (
    <>
      <span>Has dado un paso en la dirección correcta!
      Combatir el <strong>Brainrot</strong> es deber de <strong>todos</strong>.</span>

      <Section title="The end of history (?)" isFull={state.n1} watchList={watchList}  issues={ ()=>dispatch({type:"completed", field:"n1"}) } >
        {
          [
            { src:"https://www.youtube.com/embed/ebvZExtrmLY", topic:"Supply and demand" },
            { src:"https://www.youtube.com/embed/IrNQeYYvabg", topic:"⚡ Shock Therapy ⚡" },
            { src:"https://www.youtube.com/embed/AAHrkNOGME0", topic:"There should be another way 🤔" },
            { src:"https://www.youtube.com/embed/8GWKsCOPb7E", topic:"A New Hope!" }
          ].map((elem, indx)=> <Video key={indx} topic={elem.topic} src={elem.src} addToWatchList={addToWatchList} />)
        }
      </Section>


      <Section title="Body-count does (not) matter" isFull={state.n2} watchList={watchList}  issues={ ()=>dispatch({type:"completed", field:"n2"}) } >
        {
          [
            { src:"https://www.youtube.com/embed/3XHhpjbPM40", topic:"¿Tan largo me lo fiáis...?"               },
            { src:"https://www.youtube.com/embed/lqvgVeq-nso", topic:"Patrick Bateman no existe (como Persona)" } 
          ].map((elem, indx)=> <Video key={indx} topic={elem.topic} src={elem.src} addToWatchList={addToWatchList} />)
        }
      </Section>



      <Section title="T.S. Elliot - The Wasteland" isFull={state.n3} watchList={watchList} issues={()=>dispatch({type:"completed", field:"n3"})} >
        {
          [
            { src:"https://www.youtube.com/embed/zxhSthZ9fqU", topic:"Girl Boss - YASS QUEEN! 💅🏻💄" },
            { src:"https://www.youtube.com/embed/r2GzzjSysPA", topic:"$HUMAN/USD" }, 
            { src:"https://www.youtube.com/embed/A4uyEhvcqu0", topic:"W@H" },
            { src:"https://www.youtube.com/embed/y91lMxIrf14", topic:"Pinball, 1973" }
          ].map((elem, indx)=> <Video key={indx} topic={elem.topic} src={elem.src} addToWatchList={addToWatchList}/>)
        }
      </Section>


      <Section title="Cui Bono?" isFull={state.n4} watchList={watchList} issues={()=>dispatch({type:"completed", field:"n4"})}>
        {
          [
            { src:"https://www.youtube.com/embed/EmnVTiST7yM" , topic:"El Sabio de Rosario" },
            { src:"https://www.youtube.com/embed/FeeybWCfuf0" , topic:"Libertad" },
            { src:"https://www.youtube.com/embed/IQ1oaE5vCuA" , topic:"Todo para MI y para SIEMPRE 😈" },
            { src:"https://www.youtube.com/embed/ZodfIsGdw5g" , topic:"Menos modernidad, Mas Chesterton" },
          ].map((elem, indx)=> <Video key={indx} topic={elem.topic} src={elem.src} addToWatchList={addToWatchList} /> )
        }
      </Section>


      <Section title="Libre examen" isFull={state.n5} watchList={watchList} issues={()=>dispatch({type:"completed", field:"n5"})}>
        {
          [
            { src:"https://www.youtube.com/embed/_5LS2lRNEwI", topic:"Islam Aesthetic y Coquette 🎀" },
            { src:"https://www.youtube.com/embed/mZcrXKWYdm0", topic:"Calvino y Lutero. Depredación" },
            { src:"https://www.youtube.com/embed/CfRvIvNcBcE", topic:"Les franchutes ont encore récidivé - I" },
          ].map((elem, indx)=> <Video key={indx} topic={elem.topic} src={elem.src} addToWatchList={addToWatchList}/>)
        }
      </Section>
      
      
      <Section title="Symploké" isFull={state.n6} watchList={watchList} issues={()=>dispatch({type:"completed", field:"n6"})}>
        {
          [
            { src:"https://www.youtube.com/embed/FLZGi9PKRaE", topic:"Separar la paja del trigo" },
            { src:"https://www.youtube.com/embed/d5CKfOTYc3o", topic:"The brits are at it again - I" },
            { src:"https://www.youtube.com/embed/cW7nBS-3wCg", topic:"Les franchutes ont encore récidivé - II" },
            { src:"https://www.youtube.com/embed/bmmmObyblbo", topic:"Irene Montero" }
          ].map((elem, indx)=> <Video key={indx} topic={elem.topic} src={elem.src} addToWatchList={addToWatchList}/>)
        }
      </Section>
      
      
      <Section title="Red White & Blue 🇬🇧" isFull={state.n7} watchList={watchList} issues={()=>dispatch({type:"completed", field:"n7"})} >
        {
          [
            { src:"https://www.youtube.com/embed/qFn5wHQqWaE", topic:"1717" },
            { src:"https://www.youtube.com/embed/BmMzllvtrIg", topic:"The brits are at it again - II (Marvel)" },
            { src:"https://www.youtube.com/embed/CHs1PF_cKLo", topic:"Brits rare W" },
            { src:"https://www.youtube.com/embed/DoEbh_BGL2I", topic:"Piratas Gringos" }
          ].map((elem, indx)=> <Video key={indx} topic={elem.topic} src={elem.src} addToWatchList={addToWatchList}/>)
        }
      </Section>
      
      <Section title="Event Horizon" isFull={state.n8} watchList={watchList} issues={()=>dispatch({type:"completed", field:"n8"})} >
        {
          [
            {  src:"https://www.youtube.com/embed/XibCflWxZuA",  topic:"AMOGUS" },
            {  src:"https://www.youtube.com/embed/_2khAmMTAjI",  topic:"Las Cloacas" },
            {  src:"https://www.youtube.com/embed/DVAPARGgQVY",  topic:"Kensington PA" },
            {  src:"https://www.youtube.com/embed/33p-8QHZpzY",  topic:"🏳️‍🌈" },
            {  src:"https://www.youtube.com/embed/bd9nBywsnfc",  topic:"YASSSSS QUEEEEEN 💅🏻💄" },
            {  src:"https://www.youtube.com/embed/_YCQV_iUGRE",  topic:"Depredasion 🌈" },
            {  src:"https://www.youtube.com/embed/e-Tgv-ABoZ4",  topic:"Depredation" }
          ].map((elem, indx)=> <Video key={indx} topic={elem.topic} src={elem.src} addToWatchList={addToWatchList}/>)
        }
      </Section>


      <button onClick={()=>{ setWatchList([]); setRenew(true) }}>
        { renew?  <span>History reseted - Refresh your browser!</span> : <Renew fill="pink" size="24px" />   }
      </button>



    </>
  )
}


      //<Section title="Body-count does (not) matter">
      //  <Video topic="¿Tan largo me lo fiáis...?" src="https://www.youtube.com/embed/3XHhpjbPM40" />
      //  <Video topic="Patrick Bateman no existe (como Persona)" src="https://www.youtube.com/embed/lqvgVeq-nso" />
      //
      //</Section>
      //
      //
      //<Section title="T.S. Elliot - The Wasteland">
      //  <Video topic="Girl Boss - YASS QUEEN! 💅🏻💄" src="https://www.youtube.com/embed/zxhSthZ9fqU" />
      //  <Video topic="$HUMAN/USD" src="https://www.youtube.com/embed/r2GzzjSysPA" /> 
      //  <Video topic="W@H" src="https://www.youtube.com/embed/A4uyEhvcqu0" />
      //  <Video topic="Pinball, 1973" src="https://www.youtube.com/embed/y91lMxIrf14" />
      //</Section>
      //
      //
      //
      //
      //<Section title="Libre examen">
      //  <Video topic="Islam Aesthetic y Coquette 🎀" src="https://www.youtube.com/embed/_5LS2lRNEwI" />
      //  <Video topic="Calvino y Lutero. Depredación" src="https://www.youtube.com/embed/mZcrXKWYdm0" />
      //  <Video topic="Les franchutes ont encore récidivé - I" src="https://www.youtube.com/embed/CfRvIvNcBcE" />
      //</Section>
      //
      //
      //<Section title="Symploké">
      //  <Video topic="Separar la paja del trigo" src="https://www.youtube.com/embed/FLZGi9PKRaE" />
      //  <Video topic="The brits are at it again - I" src="https://www.youtube.com/embed/d5CKfOTYc3o" />
      //  <Video topic="Les franchutes ont encore récidivé - II" src="https://www.youtube.com/embed/cW7nBS-3wCg" />
      //  <Video topic="Irene Montero" src="https://www.youtube.com/embed/bmmmObyblbo"/>
      //</Section>
      //
      //
      //<Section title="Red White & Blue 🇬🇧">
      //  <Video topic="1717"  src="https://www.youtube.com/embed/qFn5wHQqWaE" />
      //  <Video topic="The brits are at it again - II (Marvel)" src="https://www.youtube.com/embed/BmMzllvtrIg" />
      //  <Video topic="Brits rare W" src="https://www.youtube.com/embed/CHs1PF_cKLo"/>
      //  <Video topic="Piratas Gringos" src="https://www.youtube.com/embed/DoEbh_BGL2I"/>
      //
      //
      //
      //</Section>
      //
      //<Section title="Event Horizon">
      //  <Video topic="AMOGUS" src="https://www.youtube.com/embed/XibCflWxZuA" />
      //  <Video topic="Las Cloacas" src="https://www.youtube.com/embed/_2khAmMTAjI" />
      //  <Video topic="Kensington PA" src="https://www.youtube.com/embed/DVAPARGgQVY" />
      //  <Video topic="🏳️‍🌈" src="https://www.youtube.com/embed/33p-8QHZpzY" />
      //  <Video topic="YASSSSS QUEEEEEN 💅🏻💄" src="https://www.youtube.com/embed/bd9nBywsnfc" />
      //  <Video topic="Depredasion 🌈" src="https://www.youtube.com/embed/_YCQV_iUGRE" />
      //  <Video topic="Depredation" src="https://www.youtube.com/embed/e-Tgv-ABoZ4" />
      //
      //</Section>
