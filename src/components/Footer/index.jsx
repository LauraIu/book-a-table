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
    <FooterContainer id="footer">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksItems>
            <Logo to="home" onClick={toggleHome}>
              MammaMia
              <Subtitle>{"ITALIAN PIZZERIA"}</Subtitle>
              <Text>{"SINCE 1966"}</Text>
            </Logo>
            {/* <FooterLinksItems> */}
            <FooterLink
              to="#home"
              smooth
              // spy={true}
              duration={500}
              exact="true"
              offset={-100}
            >
              Home
            </FooterLink>
            <FooterLink
              to="#about"
              smooth
              // spy={true}
              duration={500}
              exact="true"
              offset={80}
            >
              About
            </FooterLink>
            <FooterLink
              to="#menu"
              smooth
              // spy={true}
              duration={500}
              exact="true"
              offset={0}
            >
              Menus
            </FooterLink>
            <FooterLink
              to="#booking"
              smooth
              // spy={true}
              duration={500}
              exact="true"
              offset={0}
            >
              Booking
            </FooterLink>
          </FooterLinksItems>

          {/* <FooterLinksWrapper>
            <FooterLinksItems>
              <label htmlFor="user_name">Your Name:</label>
              <input
                type="text"
                name="user_name"
                placeholder="Name..."
                style={{
                  color: "#555",
                  fontSize: "14px",
                  marginBottom: "16px",
                  width: "280px",
                }}
              />
              <label htmlFor="user_mail">Your Email:</label>
              <input
                type="email"
                name="user_mail"
                placeholder="Email..."
                style={{
                  color: "#555",
                  fontSize: "14px",
                  marginBottom: "16px",
                  width: "280px",
                }}
              />
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                placeholder="Message..."
                style={{
                  color: "#555",
                  fontSize: "14px",
                  marginBottom: "16px",
                  width: "280px",
                }}
              />
              <SubmitButton>Send</SubmitButton>
            </FooterLinksItems>
          </FooterLinksWrapper> */}
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink
                href="/"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                rel="noopener"
                aria-label="YouTube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
            <WebsiteRights>
              <strong>MammaMia&copy; {new Date().getFullYear()}</strong> All rights reserved. Designed and coded by IuLa
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
