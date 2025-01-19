import React from 'react'
import './programs.css'
import p1 from '../../assets/program-1.png'
import p2 from '../../assets/program-2.png'
import p3 from '../../assets/program-3.png'
import i1 from '../../assets/program-icon-1.png'
import i2 from '../../assets/program-icon-1.png'
import i3 from '../../assets/program-icon-1.png'

const programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={p1} alt="placeholder p1" />
        <div className="caption">
          <img src={i1} alt=""/>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={p2} alt="placeholder p2" />
        <div className="caption">
          <img src={i2} alt=""/>
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={p3} alt="placeholder p3" />
        <div className="caption">
          <img src={i3} alt=""/>
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default programs
