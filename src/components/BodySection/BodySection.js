import { Button } from '../ButtonElement'
import React from 'react'
import {
  BodyContainer,
  BodyWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './BodySectionElements'

const BodySection = ({
  lightBg,
  id,
  topLine,
  lightText,
  headLine,
  lightTextDesc,
  desciption,
  buttonLabel,
  img,
  alt,
  primary,
  imgStart,
}) => {
  return (
    <>
      <BodyContainer lightBg={lightBg} id={id} className='element'>
        <BodyWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{desciption}</Subtitle>
                <BtnWrap>
                  <Button
                    to='/'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    accent={primary ? 1 : 0}>
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </BodyWrapper>
      </BodyContainer>
    </>
  )
}

export default BodySection
