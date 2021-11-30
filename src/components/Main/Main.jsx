import React from 'react'
import './Main.css'
import ZodiacCard from '../ZodiacCard/ZodiacCard'
import { zodiac } from '../../data'

export default function Main() {
  return (
    <main className="Main">
      {zodiac.map((element) => {
        return <ZodiacCard key="name" {...element} />
      })}
    </main>
  )
}
