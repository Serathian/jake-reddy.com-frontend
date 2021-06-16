import styled from 'styled-components/macro'
import { colorPallet } from '../../../assets/ColorPallet'
import { MdContacts } from 'react-icons/md'
import { FaToolbox, FaQuestionCircle } from 'react-icons/fa'

export const CVSidebarContainer = styled.div`
  position: relative;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const CVSideBarSlider = styled.div`
  position: sticky;
  top: 80px;
`
export const CVSidebarBG = styled.div`
  position: absolute;
  top: -80px;
  right: 5%;
  height: calc(100% + 80px);
  width: 90%;
  background-color: whitesmoke;
  z-index: -1;
`
export const CVDiagonalBox = styled.div`
  --color: blue;
  --width: 100vw;
  --full-width: 100vw;

  @media (min-width: 42em) {
    --width: 42rem;
  }

  --angle: -11deg;
  /*-----------------
  Magic Number Alert:
  
  the 0.09719 is calculated by this formula:
  tan(11°) / 2
  11° is the current skewY value.
  ------------------*/
  --magic-number: 0.09719;
  --skew-padding: calc(var(--width) * var(--magic-number));
  --clip-padding: calc(var(--full-width) * var(--magic-number));

  position: relative;
  padding: var(--skew-padding) 0;
  margin-top: -1px;

  & :before {
    background-color: ${colorPallet.content2};
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transform: skewY(var(--angle));
    transform-origin: 50% 0;
    outline: 1px solid transparent;
    backface-visibility: hidden;
  }
`
export const CVPersonalInfoContainer = styled.div`
  color: white;
  max-width: var(--width);
  margin: 0 auto;
  padding: 0.2em;
  position: relative;
`
export const CVNameWrapper = styled.div``
export const CVName = styled.h1`
  text-align: center;
  margin: 0 auto 0.5em;
  padding: 0 0.1em;
  line-height: 1.2;
  font-size: 2em;
  text-transform: uppercase;
  font-weight: 900;
`
export const CVSidebarHeaderWrapper = styled.div``
export const CVSidebarHeader = styled.h2`
  text-align: center;
  margin: 0 auto 1em;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 900;
`
export const CVSidebarSubtitleWrapper = styled.div``
export const CVSidebarSubtitle = styled.p`
  font-size: 0.75em;
  margin: 0em auto 0em;
  text-align: center;
  font-weight: 900;
  padding: 0.5em;
  text-transform: uppercase;
`
export const CVSidebarElementsContainer = styled.div`
  position: relative;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: stretch;
  justify-content: space-between;
`
export const CVSidebarElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 10px 30px 10px 30px;
`
export const CVSidebarTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 2px solid;
  border-color: ${colorPallet.content2};
`
export const CVListTitle = styled.div`
  margin-left: 7px;
`
export const CVListContainer = styled.ul`
  margin: 10px auto 5px 15px;
`
export const CVListItem = styled.li`
  font-size: 0.8em;
`
export const CVAboutMeLogo = styled(FaQuestionCircle)``
export const CVSkillsLogo = styled(FaToolbox)``
export const CVContactLogo = styled(MdContacts)``
