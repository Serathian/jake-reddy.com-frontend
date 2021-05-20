import styled from 'styled-components/macro'
import { MdArrowDownward, MdArrowForward } from 'react-icons/md'
import { colorPallet } from '../../assets/ColorPallet'

export const HeroContainer = styled.div`
  background: ${colorPallet.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const VideoOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${colorPallet.background};
  opacity: 0.3;
  z-index: 2;
`
export const VideoBackground = styled.video`
  //position: fixed;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: ${colorPallet.background};
`
export const ImageBackground = styled.img`
  //position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: ${colorPallet.background};

  @media screen and (max-width: 760px) {
    object-fit: fill;
  }
`
export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    align-items: center;
  }
`
export const HeroImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 40% 15%;
  border-color: ${colorPallet.accent};
  border-width: 2px;
  border-style: solid;
`
export const HeroH1 = styled.h1`
  color: ${colorPallet.h1};
  font-size: 48px;
  text-align: right;
  margin-bottom: 2.5px;
  margin-top: 2.5px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const HeroName = styled.span`
  color: ${colorPallet.accent};
  font-family: 'Rock Salt', cursive;
`
export const HeroJob = styled.span`
  color: ${colorPallet.accent};
  font-family: 'IBM Plex Mono', monospace;
`
export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`
export const ScrollBarContainer = styled.div`
  color: white;
  height: 100px;
  display: flex;
  width: 100%;
  z-index: 5;
  position: absolute;
  bottom: 0;
`
export const ScrollArrowWrapper = styled.div`
  display: flex;
  height: 50px;
  right: ${({ left }) => (left ? '' : '-30px')};
  left: ${({ left }) => (left ? '20px' : '')};
  bottom: 1rem;
  flex-direction: row;
  align-items: center;
  position: absolute;
  transform-origin: center top;
  transform: rotate(90deg);
`
export const ScrollBarContent = styled.div`
  z-index: 3;
  height: inherit;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  vertical-align: middle;
`
export const ScrollText = styled.p`
  font-size: 10px;
`
export const ArrowDown = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 10px;
  animation-name: shakeArrow;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes shakeArrow {
    2%,
    18% {
      transform: translate3d(-5px, 0, 0);
    }

    4%,
    16% {
      transform: translate3d(5px, 0, 0);
    }

    6%,
    10%,
    14% {
      transform: translate3d(-5px, 0, 0);
    }

    8%,
    12% {
      transform: translate3d(5px, 0, 0);
    }

    18.1% {
      transform: translate3d(0px, 0, 0);
    }
  }
`
