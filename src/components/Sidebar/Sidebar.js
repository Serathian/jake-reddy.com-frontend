import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
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
          <SidebarLink
            to='about-me'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink
            to='knowledge'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={toggle}>
            My knowledge
          </SidebarLink>
          <SidebarLink
            to='portfolio'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={toggle}>
            Portfolio
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBtn onClick={toggleContactPopup}>Contact Me</SideBtn>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
