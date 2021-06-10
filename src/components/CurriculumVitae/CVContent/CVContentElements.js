import styled from 'styled-components/macro'
import { colorPallet } from '../../../assets/ColorPallet'
import { CgProfile } from 'react-icons/cg'
import { VscGithub, VscProject, VscDebugBreakpointLog } from 'react-icons/vsc'
import { IoMdSchool } from 'react-icons/io'

export const CVContentContainer = styled.div``
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
export const CVGitLinkWrapper = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const CVGitLink = styled.a`
  padding: 7px;
`
export const CVGitLogo = styled(VscGithub)``
export const CVProfileLogo = styled(CgProfile)`
  font-size: 3em;
`
export const CVProjectsLogo = styled(VscProject)`
  font-size: 3em;
`
export const CVSchoolLogo = styled(IoMdSchool)`
  font-size: 3em;
`
