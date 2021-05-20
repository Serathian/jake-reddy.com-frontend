import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import { reactObject, codeObject } from '../components/BodySection/Data'
import BodySection from '../components/BodySection/BodySection'

import Cards from '../components/Cards/Cards'
import AboutMe from '../components/AboutMe/AboutMe'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <BodySection {...reactObject} />
      <BodySection {...codeObject} />
      <Cards />
    </>
  )
}

export default Home
