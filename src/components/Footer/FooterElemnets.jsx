import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

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


export const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: red;
  cursor: pointer;
  text-decoration: none;
  font-size: 3rem;

  font-weight: 800;
  border-bottom: 1px solid #f0e3d2;
  margin-bottom: 3rem;

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
  margin-bottom: 2rem;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.5rem;
  color: #fab623;
`;

export const FooterLink = styled(Link)`
  color: #f0e3d2;
  text-decoration: none;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  cursor: pointer;

  &:active, :focus {
    font-weight:700;
    color: #f0e3d2;
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
  margin: 40px auto 40px auto;

  /* @media screen and (max-width: 820px) {
    
  } */
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  padding-top: 2rem;
  border-top: 1px solid #f0e3d2;
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

export const WebsiteRights = styled.small`
  color: #f0e3d2;
  margin: 32px auto;
`;