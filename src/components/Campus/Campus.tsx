import React from 'react'
import './Campus.css'
import g1 from '../../assets/gallery-1.png'
import g2 from '../../assets/gallery-2.png'
import g3 from '../../assets/gallery-3.png'
import g4 from '../../assets/gallery-4.png'
import arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={g1} alt="img" />
            <img src={g2} alt="img" />
            <img src={g3} alt="img" />
            <img src={g4} alt="img" />
        </div>
        <button className='btn dark-btn'>View More <img src={arrow} alt="arrow"/></button>
    </div>
  )
}

export default Campus
