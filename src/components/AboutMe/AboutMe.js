import React, { useState } from 'react'
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
  const [timeFormat, setTimeFormat] = useState('days')
  const [timeIsClicked, setTimeIsClicked] = useState(false)
  const dateStart = new Date('2020-04-15')
  const currentDate = new Date()

  const basetimeSinceStart = Math.ceil(Math.abs(currentDate - dateStart))

  const cycleTimeFormat = () => {
    if (timeIsClicked === false) {
      setTimeIsClicked(true)
    }
    switch (timeFormat) {
      case 'hours':
        setTimeFormat('days')
        break
      case 'days':
        setTimeFormat('months')
        break
      case 'months':
        setTimeFormat('year')
        break
      case 'year':
        setTimeFormat('hours')
        break
      default:
        break
    }
  }

  const getTimeSinceStart = () => {
    switch (timeFormat) {
      case 'hours':
        return Math.round(basetimeSinceStart / (1000 * 60 * 60))
      case 'days':
        return Math.round(basetimeSinceStart / (1000 * 60 * 60 * 24))
      case 'months':
        return Math.round(basetimeSinceStart / (1000 * 60 * 60 * 24 * 28))
      case 'year':
        return Math.round(basetimeSinceStart / (1000 * 60 * 60 * 24 * 28 * 12))
      default:
        break
    }
  }

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
              <ImageTopLine>Let me introduce myself</ImageTopLine>
              <AboutMeP>
                My name's <AccentText>Jake Reddy</AccentText> and I'm a{' '}
                <i>(mostly)</i> self taught programmer.
              </AboutMeP>
            </ImageTextWrapper>
          </ImageColumn>
          <TextColum>
            <AboutMeP>
              In April 2020 - COVID-19 left me redundant from my previous
              employment as a Restaurant manager.
            </AboutMeP>
            <AboutMeP>
              When one door closes another opens, now with an abundant amount of
              free time the door is open for me to pursue a career in code.
            </AboutMeP>
            <AboutMeP style={{ textAlign: 'center' }}>
              I haven't been sitting idly for <br></br>
              <AccentText
                onClick={cycleTimeFormat}
                style={{ cursor: 'pointer', margin: '40px' }}>
                {getTimeSinceStart()} {timeFormat}
                {timeIsClicked ? null : (
                  <span
                    style={{
                      fontSize: '0.5em',
                      position: 'relative',
                      top: '-3px',
                      left: '7px',
                    }}>
                    psst! click me!
                  </span>
                )}
              </AccentText>
              <br></br>Check out my study timeline <br></br>
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
