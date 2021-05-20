import React from 'react'
import {
  HeroContainer,
  HeroBackground,
  VideoOverlay,
  VideoBackground,
  ImageBackground,
  HeroContent,
  HeroImage,
  HeroH1,
  HeroName,
  HeroJob,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ScrollBarContainer,
  ScrollArrowWrapper,
  ScrollText,
  ArrowDown,
  ScrollBarContent,
  ScrollBarBg,
} from './HeroSectionElements'
import backgroundVideo from '../../assets/videos/video-1.mp4'
import heroImg from '../../assets/images/heroImg.jpg'
import backgroundImg from '../../assets/images/purple-abstract.jpg'
import { Button } from '../ButtonElement'

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <VideoOverlay />
        <ImageBackground src={backgroundImg} />
      </HeroBackground>
      <HeroContent>
        {/* <HeroImage src={heroImg} /> */}
        <HeroH1>
          Hey! my name's <HeroName>Jake Reddy</HeroName>
        </HeroH1>
        <HeroH1>
          and i'm an aspiring <br></br>
          <HeroJob>{'< fullstack developer >'}</HeroJob>
        </HeroH1>
        {/* <HeroP>Aspring Fulllstack Developer</HeroP> */}
        {/* <HeroBtnWrapper>
          <Button to='/portfolio' accent='true'>
            Check out my portfolio <ArrowForward />
          </Button>
        </HeroBtnWrapper> */}
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
