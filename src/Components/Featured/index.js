import React from 'react'
import Carousel from "./Carousel"
import Countdown from "./Countdown"
export default function Featured() {
  return (
    <div>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">
          Ariana Grande
        </div>
      </div>

      <Countdown />
    </div>
  )
}
