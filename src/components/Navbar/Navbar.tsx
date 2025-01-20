import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import menu from "../../assets/menu-icon.png"



const Navbar = () => {
  
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;

      if (target.tagName === 'A' && target.hash) {
        event.preventDefault(); // Prevent the default jump behavior

        const section = document.querySelector(target.hash);
        if (section) {
          const offset = 250; // Adjust this value for your navbar height
          const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setShow(true);
      } else setShow(false);
    });
  }, []);

  const[showMobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!showMobileMenu);
  }
  return (
    <nav className={`container ${show? 'dark-nav' : ''}`}>
        <img src={logo} alt="Nav logo" className='logo'/>
        <ul className={showMobileMenu ? "" : "hide-mobile-menu"}>
            <li><a href="#home">Home</a></li>
            <li><a href="#program">Program</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#campus">Campus</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href='#contact' className='btn'>Contact US</a></li>
        </ul>
        <img src={menu} alt="Nav logo" className='menuIcon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
