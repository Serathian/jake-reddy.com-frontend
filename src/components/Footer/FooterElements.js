import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colorPallet } from '../../assets/ColorPallet'

export const FooterContainer = styled.footer`
  background-color: ${colorPallet.background};
`

export const FooterWrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

export const FooterLinksColumn = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const FooterLinksBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  margin: 16px;
  text-align: left;
  width: fit-content;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0.5rem;
  font-size: 14px;

  &:hover {
    color: ${colorPallet.accent};
    transition: 0.3s ease-in-out;
  }
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediawrapper = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  width: 200px;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  flex-grow: 1;
`

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  text-align: center;
  flex-grow: 2;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  flex-grow: 1;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`
