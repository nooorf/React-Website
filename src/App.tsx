import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Program" title="What we offer"/>
      <Programs />
      <About />
      <Title subtitle="Gallery" title="Campus Photos"/>
      <Campus />
      <Title subtitle="Testimonials" title="What Our Students Say"/>
      <Testimonials/>
      <Title subtitle='Contact Us' title='Get in Touch' />
      </div>
    </div>
  )
}

export default App
