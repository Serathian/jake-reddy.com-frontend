import styled from 'styled-components/macro'
import { colorPallet } from '../../../assets/ColorPallet'
import { CgProfile, CgToolbox } from 'react-icons/cg'
import { VscGithub, VscProject, VscDebugBreakpointLog } from 'react-icons/vsc'
import { IoMdSchool } from 'react-icons/io'
import { IoSchoolOutline } from 'react-icons/io5'
import { FiServer } from 'react-icons/fi'
import { RiComputerLine } from 'react-icons/ri'
import { GrTechnology } from 'react-icons/gr'
import { AiFillEye } from 'react-icons/ai'
import { GiAchievement } from 'react-icons/gi'

export const CVContentContainer = styled.div`
  margin-bottom: 10vh;
`
export const CVElementContainer = styled.div``
export const CVElementTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid;
  border-color: ${colorPallet.content2};
`
export const CVElementTitle = styled.h1`
  margin-left: 7px;
`
export const CVElementContent = styled.p``
export const CVCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: stretch;
`
export const CVCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: stretch;
  margin: 10px;
`
export const CVCardTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 2px solid;
  border-color: ${colorPallet.content2};
`
export const CVCardTitle = styled.h5`
  padding: unset;
  margin: unset;
  margin-left: 7px;
`
export const CVCardListContainer = styled.ul``
export const CVCardListItem = styled.li`
  font-size: 0.8em;
`
export const CVProjectsContainer = styled.div``
export const CVProjectContainer = styled.div``
export const CVSubtitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 15px;
`
export const CVProjectBreakPoint = styled(VscDebugBreakpointLog)``
export const CVSubtitle = styled.h3`
  padding-left: 7px;
  margin: unset;
`
export const CVProjectSubtitleWrapper = styled.div``
export const CVProjectSubtitle = styled.h4`
  padding-left: 23px;
  margin: unset;
  margin-top: 7px;
  font-size: 0.95em;
  font-weight: 400;
  font-style: italic;
`
export const CVProjectDescriptionWrapper = styled.div``
export const CVProjectDescription = styled.p`
  padding-left: 15px;
  font-size: 0.8em;
`
export const CVProjectLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const CVGitLinkWrapper = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`
export const CVGitLink = styled.a`
  padding: 7px;
`
export const CVDemoLinkWrapper = styled.a`
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: black;
`
export const CVDemoLink = styled.a`
  padding: 7px;
`
export const CVGitLogo = styled(VscGithub)``
export const CVDemoLogo = styled(AiFillEye)``
export const CVProfileLogo = styled(CgProfile)`
  font-size: 3em;
`
export const CVToolBox = styled(CgToolbox)`
  font-size: 3em;
`
export const CVServerLogo = styled(FiServer)`
  font-size: 1.5em;
`
export const CVScreenLogo = styled(RiComputerLine)`
  font-size: 1.5em;
`
export const CVTechLogo = styled(GrTechnology)`
  font-size: 1.5em;
`
export const CVProjectsLogo = styled(VscProject)`
  font-size: 3em;
`
export const CVSchoolLogo = styled(IoMdSchool)`
  font-size: 3em;
`
export const CVSchoolOutlineLogo = styled(IoSchoolOutline)`
  font-size: 3em;
`
export const CVAchievementLogo = styled(GiAchievement)`
  font-size: 3em;
`
