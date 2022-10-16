import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { SubmitButton } from "../Booking/BookingElements";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  Logo,
  Subtitle,
  Text,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElemnets";

const Footer = () => {
  // Scrolling back to top
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
      /* set the icons color */
      // <IconContext.Provider value={{ color: "#f9f9f9"}}>
      // </IconContext.Provider>
      <FooterContainer id="footer">
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksItems>
              <Logo to='home' onClick={toggleHome}>
                MammaMia
                <Subtitle>{"ITALIAN PIZZERIA"}</Subtitle>
                <Text>{"SINCE 1966"}</Text>
              </Logo>
            </FooterLinksItems>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLink
                  to="home"
                  smooth={true}
                  // spy={true}
                  duration={500}
                  exact="true"
                  offset={-100}
                >
                  Home
                </FooterLink>
                <FooterLink
                  to="about"
                  smooth={true}
                  // spy={true}
                  duration={500}
                  exact="true"
                  offset={-100}
                >
                  About
                </FooterLink>
                <FooterLink
                  to="menu"
                  smooth={true}
                  // spy={true}
                  duration={500}
                  
                  exact="true"
                  offset={-100}
                >
                  Menus
                </FooterLink>
                <FooterLink
                  to="booking"
                  smooth={true}
                  // spy={true}
                  duration={500}
                  exact="true"
                  offset={-100}
                >
                  Booking
                </FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <SubmitButton>Send:</SubmitButton>
              </FooterLinksItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" rel="noopener" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" rel="noopener" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" rel="noopener" aria-label="YouTube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" rel="noopener" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" rel="noopener" aria-label="LinkedIn">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
              <WebsiteRights>
                MammaMia&copy; {new Date().getFullYear()} All rights reserved.
              </WebsiteRights>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
  );
};

export default Footer;
