import React from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { SmallLogoWrapper, LogoLink, LogoH1Small, LogoSubtitleSmall, LogoTextSmall } from "../../Logo";

import {
  FooterContainer,
  FooterLinksContainer,
  ContactText,
  FooterLinksItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
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
      
      <FooterLinksContainer>
        <FooterLinksItems>
          {/* <label htmlFor="user_name">Your Name:</label>
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
            <button>Send</button> */}
        </FooterLinksItems>
        <FooterLinksItems>
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
            Menu
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
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <ContactText>
           <span><strong>NEED HELP?</strong>&nbsp;
            Call us at&nbsp;
            <strong>(428) 111-1111</strong>, email us at&nbsp;
            <strong>mammamia@info.com</strong>, or contact us on social media:</span>
          </ContactText>
          <SocialIcons>
            <SocialIconLink
              href="/"
              target="_self"
              rel="noopener"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_top"
              rel="noopener"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_top"
              rel="noopener"
              aria-label="YouTube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_top"
              rel="noopener"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_top"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
      <SmallLogoWrapper>
      <LogoLink to="/" onClick={toggleHome}>
        <LogoH1Small>{"MammaMia"}</LogoH1Small>
        <LogoSubtitleSmall style={{ color: "#170f0b" }}>{"ITALIAN PIZZERIA"}</LogoSubtitleSmall>
        <LogoTextSmall style={{ color: "#170f0b" }}>{"SINCE 1966"}</LogoTextSmall>
      </LogoLink></SmallLogoWrapper>
      <WebsiteRights>
       <span><strong>MammaMia<sup>&copy;</sup> 2021 - {new Date().getFullYear()}&nbsp;</strong> All
        Rights Reserved. Designed and coded by&nbsp;
        
          <a
            href="https://lauraiu.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Laura Iuga Portfolio" style={{"color": "#170f0b", "fontWeight":"700"}}
          >
            IuLa
          </a>
        </span>
      </WebsiteRights>
      
    </FooterContainer>
  );
};

export default Footer;
