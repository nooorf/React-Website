import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <nav className='container'>
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
