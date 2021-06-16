import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavScrollLinks,
  NavLinks,
  NavBtnWrapper,
  NavBtn,
} from './NavbarElements'

const Navbar = ({ toggleContactPopup, toggleSidebar }) => {
  const location = useLocation()

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
  if (location.pathname !== '/resume') {
    return (
      <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={() => scroll.scrollToTop()}>
              {'< J R >'}
            </NavLogo>

            <MobileIcon onClick={toggleSidebar}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              {location.pathname === '/' ? (
                <>
                  <NavItem>
                    <NavScrollLinks
                      to='about-me'
                      smooth='true'
                      duration={500}
                      spy='true'
                      exact='true'
                      offset={-80}>
                      About Me
                    </NavScrollLinks>
                  </NavItem>
                  <NavItem>
                    <NavScrollLinks
                      to='knowledge'
                      smooth='true'
                      duration={500}
                      spy='true'
                      exact='true'
                      offset={-80}>
                      My knowledge
                    </NavScrollLinks>
                  </NavItem>
                  <NavItem>
                    <NavScrollLinks
                      to='portfolio'
                      smooth='true'
                      duration={500}
                      spy='true'
                      exact='true'
                      offset={-80}>
                      Portfolio
                    </NavScrollLinks>
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem>
                    <NavLinks
                      to='/'
                      smooth='true'
                      duration={500}
                      spy='true'
                      exact='true'
                      offset={-80}>
                      Go Back
                    </NavLinks>
                  </NavItem>
                </>
              )}

              <NavBtnWrapper>
                <NavBtn onClick={toggleContactPopup}>Contact Me</NavBtn>
              </NavBtnWrapper>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </>
    )
  } else {
    return null
  }
}

export default Navbar
