//import { useState, Suspense, lazy, useEffect } from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Section from './Section.jsx'
import Video from './Video.jsx'

export default function App() {
  const [watchList, setWatchList] = useState(() => {
    const saved = localStorage.getItem("_watched_");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("_watched_", JSON.stringify(watchList));
  }, [watchList]);

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

      <Section title="The end of history (?)" >
        <Video topic="Supply and demand" src="https://www.youtube.com/embed/ebvZExtrmLY"    addToWatchList={addToWatchList} />
        <Video topic="⚡ Shock Therapy ⚡" src="https://www.youtube.com/embed/IrNQeYYvabg"  addToWatchList={addToWatchList}  />
        <Video topic="There should be another way 🤔"  src="https://www.youtube.com/embed/AAHrkNOGME0" addToWatchList={addToWatchList} />
        <Video topic="A New Hope!" src="https://www.youtube.com/embed/8GWKsCOPb7E"  addToWatchList={addToWatchList}/>
      </Section>

      <Section title="Body-count does (not) matter">
        <Video topic="¿Tan largo me lo fiáis...?" src="https://www.youtube.com/embed/3XHhpjbPM40" />
        <Video topic="Patrick Bateman no existe (como Persona)" src="https://www.youtube.com/embed/lqvgVeq-nso" />

      </Section>


      <Section title="T.S. Elliot - The Wasteland">
        <Video topic="Girl Boss - YASS QUEEN! 💅🏻💄" src="https://www.youtube.com/embed/zxhSthZ9fqU" />
        <Video topic="$HUMAN/USD" src="https://www.youtube.com/embed/r2GzzjSysPA" /> 
        <Video topic="W@H" src="https://www.youtube.com/embed/A4uyEhvcqu0" />
        <Video topic="Pinball, 1973" src="https://www.youtube.com/embed/y91lMxIrf14" />
      </Section>


      <Section title="Cui Bono?">
        <Video topic="El Sabio de Rosario" src="https://www.youtube.com/embed/EmnVTiST7yM" />
        <Video topic="Libertad" src="https://www.youtube.com/embed/FeeybWCfuf0" />
        <Video topic={"\"Todo para MI y para SIEMPRE 😈\""} src="https://www.youtube.com/embed/IQ1oaE5vCuA" />
        <Video topic="Menos modernidad, Mas Chesterton" src="https://www.youtube.com/embed/ZodfIsGdw5g" />
      </Section>


      <Section title="Libre examen">
        <Video topic="Islam Aesthetic y Coquette 🎀" src="https://www.youtube.com/embed/_5LS2lRNEwI" />
        <Video topic="Calvino y Lutero. Depredación" src="https://www.youtube.com/embed/mZcrXKWYdm0" />
        <Video topic="Les franchutes ont encore récidivé - I" src="https://www.youtube.com/embed/CfRvIvNcBcE" />
      </Section>


      <Section title="Symploké">
        <Video topic="Separar la paja del trigo" src="https://www.youtube.com/embed/FLZGi9PKRaE" />
        <Video topic="The brits are at it again - I" src="https://www.youtube.com/embed/d5CKfOTYc3o" />
        <Video topic="Les franchutes ont encore récidivé - II" src="https://www.youtube.com/embed/cW7nBS-3wCg" />
        <Video topic="Irene Montero" src="https://www.youtube.com/embed/bmmmObyblbo"/>
      </Section>


      <Section title="Red White & Blue 🇬🇧">
        <Video topic="1717"  src="https://www.youtube.com/embed/qFn5wHQqWaE" />
        <Video topic="The brits are at it again - II (Marvel)" src="https://www.youtube.com/embed/BmMzllvtrIg" />
        <Video topic="Brits rare W" src="https://www.youtube.com/embed/CHs1PF_cKLo"/>
        <Video topic="Piratas Gringos" src="https://www.youtube.com/embed/DoEbh_BGL2I"/>



      </Section>

      <Section title="Event Horizon">
        <Video topic="AMOGUS" src="https://www.youtube.com/embed/XibCflWxZuA" />
        <Video topic="Las Cloacas" src="https://www.youtube.com/embed/_2khAmMTAjI" />
        <Video topic="Kensington PA" src="https://www.youtube.com/embed/DVAPARGgQVY" />
        <Video topic="🏳️‍🌈" src="https://www.youtube.com/embed/33p-8QHZpzY" />
        <Video topic="YASSSSS QUEEEEEN 💅🏻💄" src="https://www.youtube.com/embed/bd9nBywsnfc" />
        <Video topic="Depredasion 🌈" src="https://www.youtube.com/embed/_YCQV_iUGRE" />
        <Video topic="Depredation" src="https://www.youtube.com/embed/e-Tgv-ABoZ4" />

      </Section>




    </>
  )
}

