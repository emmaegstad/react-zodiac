import React from 'react'
import './ZodiacCard.css'

export default function ZodiacCard({ name, dates }) {
  return (
    <div>
      <img
        className="image"
        src={`${process.env.PUBLIC_URL}/assets/zodiac-images/${name}.png`}
        alt="aquarius"
      />
      <span>
        {name} {dates}
      </span>
    </div>
  )
}
