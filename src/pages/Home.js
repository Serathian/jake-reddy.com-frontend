import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import { kksObject, moreObject } from '../components/BodySection/Data'
import BodySection from '../components/BodySection/BodySection'

import Cards from '../components/Cards/Cards'
import AboutMe from '../components/AboutMe/AboutMe'

const Home = ({ toggleTimeline }) => {
  return (
    <>
      <HeroSection />
      <AboutMe toggleTimeline={toggleTimeline} />
      <Cards />
      <div id='portfolio'>
        <BodySection {...kksObject} />
        <BodySection {...moreObject} />
      </div>
    </>
  )
}

export default Home
