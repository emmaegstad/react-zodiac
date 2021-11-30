import React from 'react'
import './Main.css'
import ZodiacCard from '../ZodiacCard/ZodiacCard'
import { zodiac } from '../../data'

export default function Main() {
  return (
    <main>
      {zodiac.map((element) => {
        return <ZodiacCard className=".card" key="name" {...element} />
      })}
    </main>
  )
}
