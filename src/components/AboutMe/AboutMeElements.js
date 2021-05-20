import styled from 'styled-components/macro'
import { colorPallet } from '../../assets/ColorPallet'

export const AboutMeContainer = styled.div`
  color: #fff;
  background: #23152f;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`
export const AboutMeWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 550px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  /* margin-right: auto; */
  margin-left: auto;
  //padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 750px;
  }
`
export const AboutMeRows = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
  }
`
export const ImageColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 40px;
`
export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border-color: ${colorPallet.accent};
  border-width: 2px;
  border-style: solid;
`
export const ImageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 540px;
  padding-top: 0;
`
export const ImageTopLine = styled.div`
  color: ${colorPallet.accent};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`
export const AboutMeP = styled.div`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`
export const TextColum = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TimeLineBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const AccentText = styled.span`
  color: ${colorPallet.accent};
  font-family: 'Rock Salt', cursive;
`
