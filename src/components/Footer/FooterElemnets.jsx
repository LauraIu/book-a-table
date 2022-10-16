import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll/modules";

export const FooterContainer = styled.div`
  background-color: #170f0b;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* @media screen and (max-width: 820px) {
    
  } */
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 16px;
  text-align: center;
  width: 200px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;


export const Logo = styled(LinkScroll)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: red;
  cursor: pointer;
  text-decoration: none;
  font-size: 3rem;

  font-weight: 800;

  &:hover {
    text-decoration: none;
    color: red;
  }
`;

export const Subtitle = styled.h3`
  justify-self: center;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.5rem;
  color: #fab623;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  justify-self: center;
  cursor: pointer;
  margin-bottom: 2.5rem;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.5rem;
  color: #fab623;
`;

export const FooterLink = styled(LinkScroll)`
  color: #f0e3d2;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;

  &.active {
    font-weight:700;
    color: #fab623;
  }

  &:hover {
    color: #fab623;
    transition: 0.3s ease-out;
    text-decoration: none;
  }
`;

export const SocialMedia = styled.div`
  max-width: 1024px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* max-width: 1024px; */
  margin: 40px auto 0 auto;

  /* @media screen and (max-width: 820px) {
    
  } */
`;

export const WebsiteRights = styled.small`
  color: #f0e3d2;
  margin: 32px auto;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #f0e3d2;
  font-size: 24px;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    color: #fab623;
  }
`;
