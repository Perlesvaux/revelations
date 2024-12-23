import { useState, Suspense, lazy, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import ReactLogoComponent from './ReactLogoComponent.jsx'
import Section from './Section.jsx'
import LoadingScreen from './LoadingScreen.jsx'
import Video from './Video.jsx'
import IframeYT from './IframeYT.jsx'

export default function App() {

          //<img src={reactLogo} className="logo react" alt="React logo" />
  return (
    <>

    <Suspense fallback={<LoadingScreen  color="gray" taste="dashed" />}>

      <Section title="The end of history(?)" >
          <IframeYT topic="Girl Boss - YASS QUEEN! 💅🏻🎀" src="https://www.youtube.com/embed/zxhSthZ9fqU" />
      </Section>




    </Suspense>

    </>
  )
}



      //<Section title="The end of history(?)" >
      //    <Video topic="Supply and demand...">
      //      <iframe width="100%" height="250px" src="https://www.youtube.com/embed/ebvZExtrmLY" title="Commodifying Slavic Women&#39;s Bodies 🇷🇺🇺🇦" frameBorder="0"  allowFullScreen />
      //      </Video>
      //
      //    <Video topic="T.I.N.A">
      //      <iframe width="100%" height="250" src="https://www.youtube.com/embed/IrNQeYYvabg" title="How Capitalism Destroyed Russia" frameBorder="0"  allowFullScreen></iframe>
      //    </Video>
      //
      //    <Video topic="Girl Boss - YASS QUEEN! 💅🏻🎀">
      //      <iframe width="100%" height="250px" src="https://www.youtube.com/embed/zxhSthZ9fqU" title="Tienes que “ponerte la camiseta”." frameBorder="0"  allowFullScreen/>
      //    </Video>
      //</Section>


      //<Section>
      //  <iframe width="100%" height="250px" src="https://www.youtube.com/embed/zxhSthZ9fqU" allowFullScreen/>
      //</Section>
      //
//
//
//
      //<Section title="The end of history(?)" >
      //    <Video topic="Supply and demand...">
      //      <iframe width="100%" height="250px" src="https://www.youtube.com/embed/ebvZExtrmLY" title="Commodifying Slavic Women&#39;s Bodies 🇷🇺🇺🇦" frameBorder="0"  allowFullScreen />
      //      </Video>
      //
      //    <Video topic="T.I.N.A">
      //      <iframe width="100%" height="250" src="https://www.youtube.com/embed/IrNQeYYvabg" title="How Capitalism Destroyed Russia" frameBorder="0"  allowFullScreen></iframe>
      //    </Video>
      //
      //    <Video topic="Girl Boss - YASS QUEEN! 💅🏻🎀">
      //      <iframe width="100%" height="600px" src="https://www.youtube.com/embed/zxhSthZ9fqU" title="Tienes que “ponerte la camiseta”." frameBorder="0"  allowFullScreen/>
      //    </Video>
      //</Section>
