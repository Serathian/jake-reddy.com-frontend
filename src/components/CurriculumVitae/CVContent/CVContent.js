import React from 'react'
import {
  CVContentContainer,
  CVElementContainer,
  CVElementTitleWrapper,
  CVElementTitle,
  CVElementContent,
  CVCardsContainer,
  CVCard,
  CVCardTitleWrapper,
  CVCardTitle,
  CVCardListContainer,
  CVCardListItem,
  CVProjectContainer,
  CVSubtitleWrapper,
  CVSubtitle,
  CVProjectSubtitleWrapper,
  CVProjectSubtitle,
  //CVProjectDescriptionWrapper,
  //CVProjectDescription,
  CVProjectLinksContainer,
  CVGitLinkWrapper,
  CVGitLink,
  CVDemoLinkWrapper,
  CVDemoLink,
  CVProfileLogo,
  CVProjectsLogo,
  CVGitLogo,
  CVDemoLogo,
  CVProjectBreakPoint,
  CVSchoolLogo,
  CVSchoolOutlineLogo,
  CVServerLogo,
  CVScreenLogo,
  CVTechLogo,
  CVToolBox,
  CVAchievementLogo,
} from './CVContentElements'
import { cvContentText } from '../../../assets/text/cvText'

const CVContent = ({ language = 'english' }) => {
  return (
    <CVContentContainer>
      {/*   Profile   */}
      <CVElementContainer>
        <CVElementTitleWrapper>
          <CVProfileLogo />
          <CVElementTitle>
            {cvContentText[language].profile.title}
          </CVElementTitle>
        </CVElementTitleWrapper>
        <CVElementContent>
          {cvContentText[language].profile.content}
        </CVElementContent>
      </CVElementContainer>
      {/* Skills */}
      <CVElementContainer>
        <CVElementTitleWrapper>
          <CVToolBox />
          <CVElementTitle>Skills</CVElementTitle>
        </CVElementTitleWrapper>
        <CVCardsContainer>
          <CVCard>
            <CVCardTitleWrapper>
              <CVServerLogo />
              <CVCardTitle>Backend</CVCardTitle>
            </CVCardTitleWrapper>
            <CVCardListContainer>
              <CVCardListItem>Nodejs</CVCardListItem>
              <CVCardListItem>Express</CVCardListItem>
              <CVCardListItem>GraphQL, Apollo</CVCardListItem>
              <CVCardListItem>MongoDB, Mongoose</CVCardListItem>
              <CVCardListItem>Supertest</CVCardListItem>
            </CVCardListContainer>
          </CVCard>

          <CVCard>
            <CVCardTitleWrapper>
              <CVScreenLogo />
              <CVCardTitle>Frontend</CVCardTitle>
            </CVCardTitleWrapper>
            <CVCardListContainer>
              <CVCardListItem>React</CVCardListItem>
              <CVCardListItem>Redux</CVCardListItem>
              <CVCardListItem>D3</CVCardListItem>
              <CVCardListItem>Styled-Components</CVCardListItem>
              <CVCardListItem>Jest and Cypress</CVCardListItem>
            </CVCardListContainer>
          </CVCard>

          <CVCard>
            <CVCardTitleWrapper>
              <CVTechLogo />
              <CVCardTitle>Languages</CVCardTitle>
            </CVCardTitleWrapper>
            <CVCardListContainer>
              <CVCardListItem>Javascript</CVCardListItem>
              <CVCardListItem>HTML/JSX</CVCardListItem>
              <CVCardListItem>CSS</CVCardListItem>
              <CVCardListItem>C#</CVCardListItem>
              <CVCardListItem>Java</CVCardListItem>
            </CVCardListContainer>
          </CVCard>
        </CVCardsContainer>
      </CVElementContainer>
      {/*   Projects   */}
      <CVElementContainer>
        <CVElementTitleWrapper>
          <CVProjectsLogo />
          <CVElementTitle>Projects</CVElementTitle>
        </CVElementTitleWrapper>
        {/* Jake-reddy.com */}
        <CVProjectContainer>
          <CVSubtitleWrapper>
            <CVProjectBreakPoint />
            <CVSubtitle>www.jake-reddy.com</CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>
              Personal project - Full-stack Webapp - Nodejs, React, Formik,
              reCaptcha
            </CVProjectSubtitle>
          </CVProjectSubtitleWrapper>
          <CVProjectLinksContainer>
            <CVGitLinkWrapper
              href='https://github.com/Serathian/jake-reddy.com-frontend'
              target='_blank'>
              <CVGitLogo />
              <CVGitLink>Source</CVGitLink>
            </CVGitLinkWrapper>
            <CVDemoLinkWrapper
              href='https://www.jake-reddy.com'
              target='_blank'>
              <CVDemoLogo />
              <CVDemoLink>Live Demo</CVDemoLink>
            </CVDemoLinkWrapper>
          </CVProjectLinksContainer>
        </CVProjectContainer>
        {/* Climbing Gear Graph */}
        <CVProjectContainer>
          <CVSubtitleWrapper>
            <CVProjectBreakPoint />
            <CVSubtitle>COVID-19 Vaccination data aggregation</CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>
              Solita open exercise - Data aggregation and graphical display -
              Nodejs, Express, MongoDB, D3, React, jest
            </CVProjectSubtitle>
          </CVProjectSubtitleWrapper>

          <CVProjectLinksContainer>
            <CVGitLinkWrapper
              href='https://github.com/Serathian/Vaccinations-2021-backend/blob/master/README.md'
              target='_blank'>
              <CVGitLogo />
              <CVGitLink>Source</CVGitLink>
            </CVGitLinkWrapper>
            <CVDemoLinkWrapper
              href='https://afternoon-spire-41729.herokuapp.com/'
              target='_blank'>
              <CVDemoLogo />
              <CVDemoLink>Live Demo</CVDemoLink>
            </CVDemoLinkWrapper>
          </CVProjectLinksContainer>
        </CVProjectContainer>

        {/* Library database */}
        <CVProjectContainer>
          <CVSubtitleWrapper>
            <CVProjectBreakPoint />
            <CVSubtitle>Library Database</CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>
              Highway 2 code - library database - Nodejs, GraphQL, React, Redux
            </CVProjectSubtitle>
          </CVProjectSubtitleWrapper>

          <CVProjectLinksContainer>
            <CVGitLinkWrapper
              href='https://github.com/Serathian/library-app-frontend'
              target='_blank'>
              <CVGitLogo />
              <CVGitLink>Source</CVGitLink>
            </CVGitLinkWrapper>
            <CVDemoLinkWrapper style={{ textDecoration: 'line-through' }}>
              <CVDemoLogo />
              <CVDemoLink>Live Demo</CVDemoLink>
            </CVDemoLinkWrapper>
          </CVProjectLinksContainer>
        </CVProjectContainer>
        {/* Blog App */}
        <CVProjectContainer>
          <CVSubtitleWrapper>
            <CVProjectBreakPoint />
            <CVSubtitle>Blog Social App</CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>
              Highway 2 code - blog listing app - Nodejs, Express, React, Redux
            </CVProjectSubtitle>
          </CVProjectSubtitleWrapper>

          <CVProjectLinksContainer>
            <CVGitLinkWrapper
              href='https://github.com/Serathian/blog-app-frontend'
              target='_blank'>
              <CVGitLogo />
              <CVGitLink>Source</CVGitLink>
            </CVGitLinkWrapper>
            <CVDemoLinkWrapper
              href='https://mysterious-harbor-18532.herokuapp.com/'
              target='_blank'>
              <CVDemoLogo />
              <CVDemoLink>Live Demo</CVDemoLink>
            </CVDemoLinkWrapper>
          </CVProjectLinksContainer>
        </CVProjectContainer>
      </CVElementContainer>
      {/*   Education   */}
      <CVElementContainer>
        <CVElementTitleWrapper>
          <CVSchoolLogo />
          <CVElementTitle>
            {cvContentText[language].education.title}
          </CVElementTitle>
        </CVElementTitleWrapper>
        {/*   Full-stack  */}
        <CVProjectContainer>
          <CVSubtitleWrapper>
            <CVProjectBreakPoint />
            <CVSubtitle>
              {cvContentText[language].education.fullstack.title}
            </CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>
              {cvContentText[language].education.fullstack.subtitle}
            </CVProjectSubtitle>
          </CVProjectSubtitleWrapper>
          {/* <CVProjectDescriptionWrapper>
            <CVProjectDescription>
              {cvContentText[language].education.fullstack.description}
            </CVProjectDescription>
          </CVProjectDescriptionWrapper> */}
        </CVProjectContainer>
        {/*   Hotel, restaurant and catering   */}
        <CVProjectContainer>
          <CVSubtitleWrapper>
            <CVProjectBreakPoint />
            <CVSubtitle>
              {cvContentText[language].education.horeca.title}
            </CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>
              {cvContentText[language].education.horeca.subtitle}
            </CVProjectSubtitle>
          </CVProjectSubtitleWrapper>
          {/* <CVProjectDescriptionWrapper>
            <CVProjectDescription>
              {cvContentText[language].education.horeca.description}
            </CVProjectDescription>
          </CVProjectDescriptionWrapper> */}
        </CVProjectContainer>
      </CVElementContainer>
      {/*  Additional Studies   */}
      <CVElementContainer>
        <CVElementTitleWrapper>
          <CVSchoolOutlineLogo />
          <CVElementTitle>
            {cvContentText[language].additionalstudies.title}
          </CVElementTitle>
        </CVElementTitleWrapper>
        {/*   Responsive Web Development  */}
        <CVProjectContainer>
          <CVSubtitleWrapper>
            <CVProjectBreakPoint />
            <CVSubtitle>
              {cvContentText[language].additionalstudies.reswebdev.title}
            </CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>
              {cvContentText[language].additionalstudies.reswebdev.subtitle}
            </CVProjectSubtitle>
          </CVProjectSubtitleWrapper>
          {/* <CVProjectDescriptionWrapper>
            <CVProjectDescription>
              {cvContentText[language].education.horeca.description}
            </CVProjectDescription>
          </CVProjectDescriptionWrapper> */}
        </CVProjectContainer>
      </CVElementContainer>
      {/*  Achievements  */}
      <CVElementContainer>
        <CVElementTitleWrapper>
          <CVAchievementLogo />
          <CVElementTitle>
            {cvContentText[language].achievements.title}
          </CVElementTitle>
        </CVElementTitleWrapper>
        {/*  GGULIVRR  */}
        <CVProjectContainer>
          <CVSubtitleWrapper>
            <CVProjectBreakPoint />
            <CVSubtitle>
              {cvContentText[language].achievements.ggulivrr.title}
            </CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>
              {cvContentText[language].achievements.ggulivrr.subtitle}
            </CVProjectSubtitle>
          </CVProjectSubtitleWrapper>
          {/* <CVProjectDescriptionWrapper>
            <CVProjectDescription>
              {cvContentText[langauge].education.horeca.description}
            </CVProjectDescription>
          </CVProjectDescriptionWrapper> */}
        </CVProjectContainer>
      </CVElementContainer>
    </CVContentContainer>
  )
}

export default CVContent
