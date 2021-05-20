import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={() => scroll.scrollToTop()}>
            {'< J R >'}
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='about-me'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>
                About Me
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='portfolio'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>
                portfolio
              </NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink to='/contact'>Contact Me</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
