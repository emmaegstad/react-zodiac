import React from 'react'
import './ZodiacCard.css'

export default function ZodiacCard({ name, dates }) {
  return (
    <div className="card">
      <img
        className="image"
        src={`${process.env.PUBLIC_URL}/assets/zodiac-images/${name}.png`}
        alt="aquarius"
      />
      <span className="name">{name}</span>
      <span className="dates">{dates}</span>
    </div>
  )
}
