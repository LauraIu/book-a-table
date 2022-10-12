import React from "react";
import { animateScroll as scroll } from "react-scroll";
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
    <FooterContainer id="footer">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <Logo to="/" onClick={toggleHome}>
              MammaMia
            </Logo>
            <Subtitle>{"ITALIAN PIZZERIA"}</Subtitle>
            <Text>{"SINCE 1966"}</Text>
            <WebsiteRights>
              MammaMia&copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLink
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Home
              </FooterLink>
              <FooterLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                About
              </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLink
                to="menu"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Menus
              </FooterLink>
              <FooterLink
                to="booking"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Booking
              </FooterLink>
              <FooterLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Contact
              </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
    // </IconContext.Provider>
  );
};

export default Footer;
