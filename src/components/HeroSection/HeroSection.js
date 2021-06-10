import React from 'react'
import {
  HeroContainer,
  HeroBackground,
  VideoOverlay,
  ImageBackground,
  HeroContent,
  HeroH1,
  HeroName,
  HeroJob,
  ScrollBarContainer,
  ScrollArrowWrapper,
  ScrollText,
  ArrowDown,
} from './HeroSectionElements'
import backgroundImg from '../../assets/images/purple-abstract.jpg'

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <VideoOverlay />
        <ImageBackground src={backgroundImg} />
      </HeroBackground>
      <HeroContent>
        <HeroH1>My name's</HeroH1>
        <HeroH1>
          <HeroName>Jake Reddy</HeroName>
        </HeroH1>
        <HeroH1>
          and i'm an aspiring <br></br>
          <HeroJob>{'< fullstack developer >'}</HeroJob>
        </HeroH1>
      </HeroContent>
      <ScrollBarContainer>
        <ScrollArrowWrapper left={true}>
          <ScrollText>scroll down</ScrollText>
          <ArrowDown />
        </ScrollArrowWrapper>
        <ScrollArrowWrapper left={false}>
          <ScrollText>scroll down</ScrollText>
          <ArrowDown />
        </ScrollArrowWrapper>
      </ScrollBarContainer>
    </HeroContainer>
  )
}

export default HeroSection
