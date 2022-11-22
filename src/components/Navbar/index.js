import React from "react";
// import { IconContext } from "react-icons";
import { animateScroll as scroll } from "react-scroll/modules";
import { FaBars } from "react-icons/fa"; /* https://react-icons.github.io/react-icons/search?q=bars*/
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Subtitle,
  Text,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle}) => {
  // Scrolling back to top
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {/* Set the icons color */}
      {/* <IconContext.Provider value={{ color: "#f9f9f9" }}>  */}
      {/* On scroll set the Nav background-color to transparent */}
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            MammaMia
          <Subtitle>{"ITALIAN PIZZERIA"}</Subtitle>
            <Text>{"SINCE 1966"}</Text></NavLogo>
          
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="#home"
                smooth={true}
                // spy={true}
                duration={500}
                // exact="true"
                offset={-100}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="#about"
                smooth
                // spy={true}
                duration={500}
                // exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="#menu"
                smooth
                // spy={true}
                duration={500}
                // exact="true"
                offset={-100}
              >
                Menus
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="#footer"
                smooth
                // spy={true}
                duration={500}
                exact="true"
                offset={-100}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to="#booking"
              smooth
              // spy={true}
              duration={500}
              exact="true"
              offset={0}
            >
              Book a Table
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Navbar;
