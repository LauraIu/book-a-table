import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

export const FooterContainer = styled.div`
  background-color: #fab623;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// export const FooterWrap = styled.div`
//   width: 100%;
// `;

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 100%;
  background-color: #efeae4;

  @media screen and (max-width: 820px) {
    padding: 16px;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  width: 550px;
  margin-top: 48px;
  padding-bottom: 1rem;

  @media screen and (max-width: 420px) {
    margin: 0;
    /* padding: 10px; */
    width: 98%;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    /* padding: 10px; */
    width: 80%;
    text-align: center;
  }
`;

export const FooterLink = styled(Link)`
  color: #170f0b;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.6rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  cursor: pointer;

  &:active {
    font-weight: 700;
    color: #efeae4;
  }

  &:hover {
    color: #fab623;
    transition: 0.3s ease-out;
    text-decoration: none;
    text-shadow: 2px 2px 4px #ffffff82;
}

  @media screen and (max-width: 768px) {
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 0rem;
    /* width: 80%; */
  }
`;

export const ContactText = styled.h4`
  display: flex;
  text-align: center;
  /* font-style: italic; */
  font-size: 1.5rem;
  padding: 2rem;
  border-top: 1px solid #170f0b;

  color: #170f0b;

  @media screen and (max-width: 768px) {
    margin: 0 16px;
  }
`;
//SocialMedia styles

export const SocialMedia = styled.div`
  /* max-width: 1052px; */
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #efeae4;

  /* @media screen and (max-width: 820px) {
    
  } */
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  padding-bottom: 16px;
`;

export const SocialIconLink = styled.a`
  color: #170f0b;
  font-size: 24px;
  margin: 40px auto;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    color: #fab623;
    text-shadow: 2px 2px 4px #ffffff82;
  }
`;

export const WebsiteRights = styled.small`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  /* width:100%; */
  padding: 1rem 1rem 4rem 1rem;
  border-top: 1px solid #170f0b;
  color: #170f0b;
  /* margin: 32px auto; */

  
  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 0 16px;
  }
`;
