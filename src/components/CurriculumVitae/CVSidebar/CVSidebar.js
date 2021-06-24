import React from 'react'
import {
  CVSidebarContainer,
  CVSideBarSlider,
  CVSidebarBG,
  CVDiagonalBox,
  CVPersonalInfoContainer,
  CVNameWrapper,
  CVName,
  CVSidebarHeaderWrapper,
  CVSidebarHeader,
  CVSidebarSubtitleWrapper,
  CVSidebarSubtitle,
  CVSidebarElementsContainer,
  CVSidebarElementContainer,
  CVSidebarTitleWrapper,
  CVListTitle,
  CVListContainer,
  CVListItem,
  CVSkillsLogo,
  CVContactLogo,
} from './CVSidebarElements'

const CVSideBar = () => {
  return (
    <CVSidebarContainer>
      <CVSidebarBG></CVSidebarBG>
      <CVSideBarSlider>
        <CVDiagonalBox>
          <CVPersonalInfoContainer>
            <CVNameWrapper>
              <CVName>Jake Reddy</CVName>
            </CVNameWrapper>
            <CVSidebarHeaderWrapper>
              <CVSidebarHeader>Javascript Fullstack Developer</CVSidebarHeader>
            </CVSidebarHeaderWrapper>
            <CVSidebarSubtitleWrapper>
              <CVSidebarSubtitle>
                Motivated by the rewards of problem-solving and acquiring
                knowledge
              </CVSidebarSubtitle>
            </CVSidebarSubtitleWrapper>
          </CVPersonalInfoContainer>
        </CVDiagonalBox>
        <CVSidebarElementsContainer>
          <CVSidebarElementContainer>
            <CVSidebarTitleWrapper>
              <CVContactLogo />
              <CVListTitle>Get In Touch</CVListTitle>
            </CVSidebarTitleWrapper>
            <CVListContainer>
              <CVListItem>(+358)0440386700</CVListItem>
              <CVListItem>info@jake-reddy.com</CVListItem>
              <CVListItem>www.jake-reddy.com</CVListItem>
            </CVListContainer>
          </CVSidebarElementContainer>
          <CVSidebarElementContainer>
            <CVSidebarTitleWrapper>
              <CVSkillsLogo />
              <CVListTitle>Languages</CVListTitle>
            </CVSidebarTitleWrapper>
            <CVListContainer>
              <CVListItem>English - Native</CVListItem>
              <CVListItem>Finnish - Excellent</CVListItem>
              <CVListItem>Spanish - Novice </CVListItem>
            </CVListContainer>
          </CVSidebarElementContainer>
          {/* <CVSidebarElementContainer>
          <CVSidebarTitleWrapper>
            <CVAboutMeLogo />
            <CVListTitle>Why choose me?</CVListTitle>
          </CVSidebarTitleWrapper>
          <CVListContainer>
            <CVListItem>Self taught and highly motived</CVListItem>
            <CVListItem>Fast learner</CVListItem>
            <CVListItem>Easy personality and work well in teams</CVListItem>
            <CVListItem>Aspiration to success and grow</CVListItem>
          </CVListContainer>
        </CVSidebarElementContainer> */}
          {/* <CVSidebarElementContainer>
          <CVSidebarTitleWrapper>
            <CVSkillsLogo />
            <CVListTitle>Skills Toolbox</CVListTitle>
          </CVSidebarTitleWrapper>
          <CVListContainer>
            <CVListItem>Javascript, C#, Java</CVListItem>
            <CVListItem>Nodejs, Express, GraphQl</CVListItem>
            <CVListItem>React, Redux</CVListItem>
            <CVListItem>MongoDB</CVListItem>
          </CVListContainer>
        </CVSidebarElementContainer> */}
        </CVSidebarElementsContainer>
      </CVSideBarSlider>
    </CVSidebarContainer>
  )
}

export default CVSideBar
