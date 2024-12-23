import { useState, Suspense, lazy, useEffect } from 'react'
import './App.css'
import Section from './Section.jsx'
//const Section = lazy(()=> import('./Section.jsx'))
//import LoadingScreen from './LoadingScreen.jsx'
//const LoadingScreen = lazy(()=> import('./LoadingScreen.jsx'))
import Video from './Video.jsx'
//const Video = lazy(()=> import('./Video.jsx'))
//import IframeYT from './IframeYT.jsx'
//const Home = lazy(()=> import('./Home.jsx'))

export default function App() {

          //<img src={reactLogo} className="logo react" alt="React logo" />
  return (
    <>



      <Section title="The end of history(?)" >
        <Video topic="Supply and demand..." src="https://www.youtube.com/embed/ebvZExtrmLY" />
        <Video topic="T.I.N.A" src="https://www.youtube.com/embed/IrNQeYYvabg" />
        <Video topic="Girl Boss - YASS QUEEN! 💅🏻🎀" src="https://www.youtube.com/embed/zxhSthZ9fqU" />
      </Section>


      <Section title="The end of history(?)" >
        <Video topic="Supply and demand..." src="https://www.youtube.com/embed/ebvZExtrmLY" />
        <Video topic="T.I.N.A" src="https://www.youtube.com/embed/IrNQeYYvabg" />
        <Video topic="Girl Boss - YASS QUEEN! 💅🏻🎀" src="https://www.youtube.com/embed/zxhSthZ9fqU" />
      </Section>



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
