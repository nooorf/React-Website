import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {
  const[showVideo, setShowVideo] = React.useState(false)

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
      <Title subtitle="Our Program" title="What we offer" />
      <div id='program'>
      <Programs />
      </div>
      <About setShowVideo={setShowVideo}/>
      <Title subtitle="Gallery" title="Campus Photos"/>
      <Campus />
      <Title subtitle="Testimonials" title="What Our Students Say" />
      <Testimonials/>
      <Title subtitle='Contact Us' title='Get in Touch' />
      <Contact/>
      <Footer />
      </div>
      <VideoPlayer showVideo={showVideo} setShowVideo={setShowVideo}/>
    </div>
  )
}

export default App
