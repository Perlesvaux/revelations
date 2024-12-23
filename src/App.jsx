//import { useState, Suspense, lazy, useEffect } from 'react'
import './App.css'
import Section from './Section.jsx'
import Video from './Video.jsx'

export default function App() {

  return (
    <>


      <Section title="The end of history (?)" >
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

