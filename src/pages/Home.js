import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import { moreObject } from '../components/Portfolio/Data'
import BodySection from '../components/Portfolio/BodySection'

import Cards from '../components/Knowledge/Cards'
import AboutMe from '../components/AboutMe/AboutMe'

const Home = ({ toggleTimeline }) => {
  return (
    <>
      <HeroSection />
      <AboutMe toggleTimeline={toggleTimeline} />
      <Cards />
      <div id='portfolio'>
        <BodySection {...moreObject} />
      </div>
    </>
  )
}

export default Home
