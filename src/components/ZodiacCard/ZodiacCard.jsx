import React from 'react'
import './ZodiacCard.css'

export default function ZodiacCard({ name, dates }) {
  return (
    <div>
      <span>
        {name} {dates}
      </span>
    </div>
  )
}
