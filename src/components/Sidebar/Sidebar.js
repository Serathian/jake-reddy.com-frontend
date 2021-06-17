import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarScrollLink,
  SidebarRouterLink,
  SideBtnWrap,
  SideBtn,
} from './SidebarElements'

export const Sidebar = ({ isOpen, toggle, toggleContactPopup }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarScrollLink
            to='about-me'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            onClick={toggle}>
            About
          </SidebarScrollLink>
          <SidebarScrollLink
            to='knowledge'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={toggle}>
            My knowledge
          </SidebarScrollLink>
          <SidebarScrollLink
            to='portfolio'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={toggle}>
            Portfolio
          </SidebarScrollLink>
          <SidebarRouterLink to='/resume' target='_blank' onClick={toggle}>
            Resume
          </SidebarRouterLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBtn onClick={toggleContactPopup}>Contact Me</SideBtn>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
