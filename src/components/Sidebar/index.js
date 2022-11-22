import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarButton,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="#home" smooth onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="#about" smooth onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="#menu" smooth onClick={toggle}>
            Menus
          </SidebarLink>
          <SidebarLink to="#footer" smooth onClick={toggle}>
            Contact
          </SidebarLink>
          
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarButton to="#booking">Book a Table</SidebarButton>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
