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

const AboutMe = () => {
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
              employment as a Restruant management.
            </AboutMeP>
            <AboutMeP>
              When one door closes another opens, now with abundant amount of
              free time the door is open for me to pursue a career in code.
            </AboutMeP>
            <AboutMeP>
              I havent been sitting idlely for 12 months, Check out my study
              timeline - click the button below!
            </AboutMeP>
            <TimeLineBtnWrapper>
              <Button accent={true}>View Timeline!</Button>
            </TimeLineBtnWrapper>
          </TextColum>
        </AboutMeRows>
      </AboutMeWrapper>
    </AboutMeContainer>
  )
}

export default AboutMe
