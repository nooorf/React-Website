import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about} alt="" className='about-img'/>
        <img src={icon} alt="" className='icon-img'/>
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with our
          university's comprehensive education programs. Our cutting edge 
          curriculum is designed to prepare students for successful careers.
          Our faculty members are experts in their fields and are dedicated
          to helping students achieve their academic and professional goals.
        </p>
        <p>Whether you are a recent high school graduate or a working professional
          looking to advance your career, our university has a program that will
          help you achieve your goals.
        </p>
      </div>
      
    </div>
  )
}

export default About
