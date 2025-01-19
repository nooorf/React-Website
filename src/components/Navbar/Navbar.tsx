import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setShow(true);
      } else setShow(false);
    });
  }, []);
  return (
    <nav className={`container ${show? 'dark-nav' : ''}`}>
        <img src={logo} alt="Nav logo" className='logo'/>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Program</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Campus</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><button className='btn'>Contact US</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
