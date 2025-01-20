import React, {createRef, useRef, useState} from 'react'
import './Testimonials.css'
import next from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import u1 from '../../assets/user-1.png'
import u2 from '../../assets/user-2.png'
import u3 from '../../assets/user-3.png'
import u4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef<HTMLUListElement>(null);
    const[tx, setTx] = useState(0);
    const slideWidth = 25; 

    const slideForward = () => {
        if (slider.current) {
            const totalSlides = slider.current.children.length; 
            const maxTx = -(totalSlides - 1) * slideWidth; 

            const newTx = tx - slideWidth;

            if (newTx < maxTx) {
                setTx(0);
                slider.current.style.transform = `translateX(0%)`;
            } else {
                setTx(newTx); 
                slider.current.style.transform = `translateX(${newTx}%)`;
            }
        }
    }
    const slideBackward = () => {
        if (slider.current) {
            const totalSlides = slider.current.children.length; 
            const newTx = tx + slideWidth;

            if (newTx > 0) {
                const maxTx = -(totalSlides - 1) * slideWidth; 
                setTx(maxTx);
                slider.current.style.transform = `translateX(${maxTx}%)`;
            } else {
                setTx(newTx); 
                slider.current.style.transform = `translateX(${newTx}%)`;
            }
        }
    };
  return (
    <div className='testimonials' id='testimonials'>
        <img src={next} className='next-btn' onClick={slideForward}/>
        <img src={back} className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={u1} alt="user-1" />
                            <div>
                                <h3>John Doe</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Choosing to work with the creative team at Webflow was one of 
                            the best business decisions I made in 2020. They were professional, attentive, and delivered a product that far exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={u4} alt="user-1" />
                            <div>
                                <h3>John Doe</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Choosing to work with the creative team at Webflow was one of 
                            the best business decisions I made in 2020. They were professional, attentive, and delivered a product that far exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={u2} alt="user-1" />
                            <div>
                                <h3>John Doe</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Choosing to work with the creative team at Webflow was one of 
                            the best business decisions I made in 2020. They were professional, attentive, and delivered a product that far exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={u3} alt="user-1" />
                            <div>
                                <h3>John Doe</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Choosing to work with the creative team at Webflow was one of 
                            the best business decisions I made in 2020. They were professional, attentive, and delivered a product that far exceeded my expectations.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
