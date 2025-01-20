import React from 'react'
import './Hero.css'
import darkArrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='Hero' id='home'>
      <div className='Hero-text'>
        <h1>Ensuring better education for a better world</h1>
        <p>
          We are committed to ensuring that all children, especially
          those from margianlized communities, have access to quality
          education for the betterment of the world.
        </p>
        <button className='btn'>Learn More <img src={darkArrow} alt="arrow" /></button>
      </div>
    </div>
  )
}

export default Hero
