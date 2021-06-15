import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksColumn,
  FooterLinksBlock,
  FooterLink,
  SocialMedia,
  SocialMediawrapper,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements'
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksColumn>
            <FooterLinksBlock>
              <FooterLink to='/blog'>My Blog</FooterLink>
              <FooterLink to='/projects'>Projects</FooterLink>
              <FooterLink to='/more-about-me'>More About Me</FooterLink>
              <FooterLink to='/terms'>Terms and Conditions</FooterLink>
            </FooterLinksBlock>
          </FooterLinksColumn>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediawrapper>
            <SocialLogo to='/'>{'< J R >'}</SocialLogo>
            <WebsiteRights>
              {'< J R > ' + new Date().getFullYear() + ' All rights reserved'}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='https://www.facebook.com/Jake.A.R/'
                target='_blank'
                aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.instagram.com/serathian/'
                target='_blank'
                aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/in/jake-reddy-104189171/'
                target='_blank'
                aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediawrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
