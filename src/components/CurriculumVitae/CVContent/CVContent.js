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

const CVContent = () => {
  return (
    <CVContentContainer>
      <CVElementContainer>
        <CVElementTitleWrapper>
          <CVProfileLogo />
          <CVElementTitle>Profile</CVElementTitle>
        </CVElementTitleWrapper>
        <CVElementContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies
          nunc id nulla commodo tempor. Sed cursus ex sit amet lacus tempus, ut
          molestie nulla placerat. Donec eu justo pharetra, interdum arcu vitae,
        </CVElementContent>
      </CVElementContainer>
      <CVElementContainer>
        <CVElementTitleWrapper>
          <CVSchoolLogo />
          <CVElementTitle>Education</CVElementTitle>
        </CVElementTitleWrapper>
        <CVProjectContainer>
          <CVSubtitleWrapper>
            <CVProjectBreakPoint />
            <CVSubtitle>Restaurant, Hotel and Catering</CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>
              Palvelualan Opisto Kuopio - 2014-2016
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
            <CVSubtitle>Android Development Masterclass</CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>Meicode.org - 2020</CVProjectSubtitle>
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
            <CVSubtitle>Full-stack Javascript (MERN)</CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>
              Highway 2 Code - Centria AMK - 2020-2021
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
            <CVSubtitle>Responsive Web Development</CVSubtitle>
          </CVSubtitleWrapper>
          <CVProjectSubtitleWrapper>
            <CVProjectSubtitle>Freecodecamp.org - 2021</CVProjectSubtitle>
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
