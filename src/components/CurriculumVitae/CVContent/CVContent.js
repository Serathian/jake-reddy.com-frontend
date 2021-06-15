import React from 'react'
import {
  CVContentContainer,
  CVElementContainer,
  CVElementTitleWrapper,
  CVElementTitle,
  CVElementContent,
  CVProjectContainer,
  CVSubtitleWrapper,
  CVSubtitle,
  CVProjectSubtitleWrapper,
  CVProjectSubtitle,
  CVProjectDescriptionWrapper,
  CVProjectDescription,
  CVGitLinkWrapper,
  CVGitLink,
  CVProfileLogo,
  CVProjectsLogo,
  CVGitLogo,
  CVProjectBreakPoint,
  CVSchoolLogo,
} from './CVContentElements'
import { cvContentText } from '../../../assets/text/cvText'

const CVContent = ({ langauge = 'english' }) => {
  return (
    <CVContentContainer>
      {/*   Profile   */}
      <CVElementContainer>
        <CVElementTitleWrapper>
          <CVProfileLogo />
          <CVElementTitle>
            {cvContentText[langauge].profile.title}
          </CVElementTitle>
        </CVElementTitleWrapper>
        <CVElementContent>
          {cvContentText[langauge].profile.content}
        </CVElementContent>
      </CVElementContainer>
      {/*   Education   */}
      <CVElementContainer>
        <CVElementTitleWrapper>
          <CVSchoolLogo />
          <CVElementTitle>
            {cvContentText[langauge].education.title}
          </CVElementTitle>
        </CVElementTitleWrapper>
        {/*   Hotel, restaurant and catering   */}
        <CVProjectContainer>
          <CVSubtitleWrapper>
            <CVProjectBreakPoint />
            <CVSubtitle>
              {cvContentText[langauge].education.horeca.title}
            </CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>
              {cvContentText[langauge].education.horeca.subtitle}
            </CVProjectSubtitle>
          </CVProjectSubtitleWrapper>
          {/* <CVProjectDescriptionWrapper>
            <CVProjectDescription>
              {cvContentText[langauge].education.horeca.description}
            </CVProjectDescription>
          </CVProjectDescriptionWrapper> */}
        </CVProjectContainer>
        {/*  Android Dev   */}
        <CVProjectContainer>
          <CVSubtitleWrapper>
            <CVProjectBreakPoint />
            <CVSubtitle>
              {cvContentText[langauge].education.android.title}
            </CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>
              {cvContentText[langauge].education.android.subtitle}
            </CVProjectSubtitle>
          </CVProjectSubtitleWrapper>
          {/* <CVProjectDescriptionWrapper>
            <CVProjectDescription>
              {cvContentText[langauge].education.android.description}
            </CVProjectDescription>
          </CVProjectDescriptionWrapper> */}
          <CVGitLinkWrapper>
            <CVGitLink>
              {cvContentText[langauge].education.android.link}
            </CVGitLink>
          </CVGitLinkWrapper>
        </CVProjectContainer>
        {/*   Full-stack  */}
        <CVProjectContainer>
          <CVSubtitleWrapper>
            <CVProjectBreakPoint />
            <CVSubtitle>
              {cvContentText[langauge].education.fullstack.title}
            </CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>
              {cvContentText[langauge].education.fullstack.subtitle}
            </CVProjectSubtitle>
          </CVProjectSubtitleWrapper>
          {/* <CVProjectDescriptionWrapper>
            <CVProjectDescription>
              {cvContentText[langauge].education.fullstack.description}
            </CVProjectDescription>
          </CVProjectDescriptionWrapper> */}
          <CVGitLinkWrapper>
            <CVGitLink>
              {cvContentText[langauge].education.fullstack.link}
            </CVGitLink>
          </CVGitLinkWrapper>
        </CVProjectContainer>
        {/*   Responsive web dev   */}
        <CVProjectContainer>
          <CVSubtitleWrapper>
            <CVProjectBreakPoint />
            <CVSubtitle>
              {cvContentText[langauge].education.reswebdev.title}
            </CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>
              {cvContentText[langauge].education.reswebdev.subtitle}
            </CVProjectSubtitle>
          </CVProjectSubtitleWrapper>
          {/* <CVProjectDescriptionWrapper>
            <CVProjectDescription>
              {cvContentText[langauge].education.reswebdev.description}
            </CVProjectDescription>
          </CVProjectDescriptionWrapper> */}
          <CVGitLinkWrapper>
            <CVGitLogo />
            <CVGitLink>
              {cvContentText[langauge].education.reswebdev.link}
            </CVGitLink>
          </CVGitLinkWrapper>
        </CVProjectContainer>
      </CVElementContainer>
      {/*   Projects   */}
      <CVElementContainer>
        <CVElementTitleWrapper>
          <CVProjectsLogo />
          <CVElementTitle>Projects</CVElementTitle>
        </CVElementTitleWrapper>
        <CVProjectContainer>
          <CVSubtitleWrapper>
            <CVProjectBreakPoint />
            <CVSubtitle>Climbing Gear Data Graph</CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>
              Personal project - Data display of use-able range for climbing
              safety gear - Nodejs, Express, D3, React
            </CVProjectSubtitle>
          </CVProjectSubtitleWrapper>
          <CVProjectDescriptionWrapper>
            <CVProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultricies nunc id nulla commodo tempor. Sed cursus ex sit amet
              lacus tempus, ut molestie nulla placerat. Donec eu justo pharetra,
              interdum arcu vitae, semper elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Praesent eleifend vitae sapien vel
              scelerisque.
            </CVProjectDescription>
          </CVProjectDescriptionWrapper>
          <CVGitLinkWrapper>
            <CVGitLogo />
            <CVGitLink>www.gitlink.com</CVGitLink>
          </CVGitLinkWrapper>
        </CVProjectContainer>
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
          <CVProjectDescriptionWrapper>
            <CVProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultricies nunc id nulla commodo tempor. Sed cursus ex sit amet
              lacus tempus, ut molestie nulla placerat. Donec eu justo pharetra,
              interdum arcu vitae, semper elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Praesent eleifend vitae sapien vel
              scelerisque.
            </CVProjectDescription>
          </CVProjectDescriptionWrapper>
          <CVGitLinkWrapper>
            <CVGitLogo />
            <CVGitLink>www.gitlink.com</CVGitLink>
          </CVGitLinkWrapper>
        </CVProjectContainer>
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
          <CVProjectDescriptionWrapper>
            <CVProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultricies nunc id nulla commodo tempor. Sed cursus ex sit amet
              lacus tempus, ut molestie nulla placerat. Donec eu justo pharetra,
              interdum arcu vitae, semper elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Praesent eleifend vitae sapien vel
              scelerisque.
            </CVProjectDescription>
          </CVProjectDescriptionWrapper>
          <CVGitLinkWrapper>
            <CVGitLogo />
            <CVGitLink>www.gitlink.com</CVGitLink>
          </CVGitLinkWrapper>
        </CVProjectContainer>
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
          <CVProjectDescriptionWrapper>
            <CVProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultricies nunc id nulla commodo tempor. Sed cursus ex sit amet
              lacus tempus, ut molestie nulla placerat. Donec eu justo pharetra,
              interdum arcu vitae, semper elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Praesent eleifend vitae sapien vel
              scelerisque.
            </CVProjectDescription>
          </CVProjectDescriptionWrapper>
          <CVGitLinkWrapper>
            <CVGitLogo />
            <CVGitLink>www.gitlink.com</CVGitLink>
          </CVGitLinkWrapper>
        </CVProjectContainer>
      </CVElementContainer>
    </CVContentContainer>
  )
}

export default CVContent
