import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksColumn,
  FooterLinksBlock,
  FooterLinkTitle,
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
              <FooterLinkTitle>Footer</FooterLinkTitle>
              <FooterLink>Link 1</FooterLink>
              <FooterLink>Link 2</FooterLink>
              <FooterLink>Link 3</FooterLink>
            </FooterLinksBlock>
            <FooterLinksBlock>
              <FooterLinkTitle>Footer</FooterLinkTitle>
              <FooterLink>Link 1</FooterLink>
              <FooterLink>Link 2</FooterLink>
              <FooterLink>Link 3</FooterLink>
            </FooterLinksBlock>
          </FooterLinksColumn>
          <FooterLinksColumn>
            <FooterLinksBlock>
              <FooterLinkTitle>Footer</FooterLinkTitle>
              <FooterLink>Link 1</FooterLink>
              <FooterLink>Link 2</FooterLink>
              <FooterLink>Link 3</FooterLink>
            </FooterLinksBlock>
            <FooterLinksBlock>
              <FooterLinkTitle>Footer</FooterLinkTitle>
              <FooterLink>Link 1</FooterLink>
              <FooterLink>Link 2</FooterLink>
              <FooterLink>Link 3</FooterLink>
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
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
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
