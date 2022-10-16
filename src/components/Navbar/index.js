import React, { useState } from "react";
import { useEffect } from "react";
// import { IconContext } from "react-icons";
import { animateScroll as scroll } from "react-scroll/modules";
import { FaBars } from "react-icons/fa"; /* https://react-icons.github.io/react-icons/search?q=bars*/
import {
  Nav,
  NavBarContainer,
  NavLogo,
  Subtitle,
  Text,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const Navbar = ({ toggle}) => {
  // Set Navbar background transparent on scroll
  const [scrollNav, setSrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setSrollNav(true);
    } else {
      setSrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  // Scrolling back to top
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {/* Set the icons color */}
      {/* <IconContext.Provider value={{ color: "#f9f9f9" }}>  */}
      {/* On scroll set the Nav background-color to transparent */}
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
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
                to="home"
                smooth={true}
                // spy={true}
                duration={500}
                exact="true"
                offset={-100}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                // spy={true}
                duration={500}
                exact="true"
                offset={-100}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="menu"
                smooth={true}
                // spy={true}
                duration={500}
                exact="true"
                offset={-100}
              >
                Menus
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="footer"
                smooth={true}
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
              to="booking"
              smooth={true}
              // spy={true}
              duration={500}
              exact="true"
              offset={-100}
            >
              Book a Table
            </NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Navbar;
