import React from 'react'

import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImage2 from '../components/HeroImage2'

const Projects = () => {
  return (
    <div>
      <NavBar />
      <HeroImage2 heading="PROJECTS" text="Some of my most recent work"/>
      <Footer />
    </div>
  )
}

export default Projects