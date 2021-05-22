import React from 'react'
import {
  AboutMeContainer,
  AboutMeWrapper,
  AboutMeRows,
  ImageColumn,
  ImageWrapper,
  Image,
  ImageTextWrapper,
  ImageTopLine,
  AboutMeP,
  TextColum,
  TimeLineBtnWrapper,
  AccentText,
} from './AboutMeElements'
import heroImg from '../../assets/images/heroImg.jpg'
import { Button } from '../ButtonElement'

const AboutMe = ({ toggleTimeline }) => {
  const dateStart = new Date('2020-04-15')
  const currentDate = new Date()

  const daysSinceStart = Math.ceil(
    Math.abs(currentDate - dateStart) / (1000 * 60 * 60 * 24)
  )

  return (
    <AboutMeContainer id='about-me'>
      <AboutMeWrapper>
        <AboutMeRows>
          <ImageColumn>
            <ImageWrapper>
              <Image src={heroImg} />
            </ImageWrapper>
            <ImageTextWrapper>
              <ImageTopLine>
                <AccentText style={{ letterSpacing: '5px' }}>Hey!</AccentText>
              </ImageTopLine>
              <ImageTopLine>Let me intoduce myself</ImageTopLine>
              <AboutMeP>
                My names <AccentText>Jake Reddy</AccentText> and I'm a{' '}
                <i>(mostly)</i> self taught programmer.
              </AboutMeP>
            </ImageTextWrapper>
          </ImageColumn>
          <TextColum>
            <AboutMeP>
              In April 2020 - COVID-19 left me redundant from my previous
              employment as a Restruant manager.
            </AboutMeP>
            <AboutMeP>
              When one door closes another opens, now with an abundant amount of
              free time the door is open for me to pursue a career in code.
            </AboutMeP>
            <AboutMeP>
              I havent been sitting idlely for{' '}
              <AccentText>{daysSinceStart} days</AccentText>, Check out my study
              timeline <br></br>
              <AccentText>click the button below!</AccentText>
            </AboutMeP>
            <TimeLineBtnWrapper>
              <Button accent={true} onClick={toggleTimeline}>
                View Timeline!
              </Button>
            </TimeLineBtnWrapper>
          </TextColum>
        </AboutMeRows>
      </AboutMeWrapper>
    </AboutMeContainer>
  )
}

export default AboutMe
