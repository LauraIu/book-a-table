import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

//Logo styles
//Big logo
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;

  margin-top: 20px;
  margin-bottom: 2.5rem;

  
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const LogoLink = styled(Link)`
  &:active,
  :focus,
  :visited {
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
  }

`;

export const LogoH1 = styled.h1`
  cursor: pointer;

  color: red;
  font-size: 3.1rem;
  font-weight: 800;
  margin-top: 0;
  margin-right: 0.6rem;
  margin-bottom: 0;

  &:active,
  :focus,
  :visited {
    text-decoration: none;
    color: red;
  }
  &:hover {
    text-decoration: none;
    color: red;
  }
`;

export const LogoSubtitle = styled.h3`
  justify-self: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.5rem;
  color: #fab623;
  margin-top: 0;
  margin-right: 0;
  text-decoration: none;

  &:active,
  :focus,
  :visited {
    text-decoration: none;
    color: #fab623;
  }
  &:hover {
    text-decoration: none;
    color: #fab623;
  }
`;

export const LogoText = styled.p`
  justify-self: center;
  cursor: pointer;
  padding-bottom: 0;
  margin-bottom: 0;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.4rem;
  color: #fab623;
  text-decoration: none;

  &:active,
  :visited {
    text-decoration: none;
    color: #fab623;
  }
  &:hover {
    text-decoration: none;
    color: #fab623;
  }
`;

// Small logo
export const SmallLogoWrapper = styled(LogoWrapper)`
  margin-top: 60px;
  margin-bottom: 52px;

  @media screen and (max-width: 420px){
    margin-top:16px;
  }
`;

export const LogoH1Small = styled(LogoH1)`
  color: #170f0b;
  font-size: 2.5rem;
`;

export const LogoSubtitleSmall = styled(LogoSubtitle)`
  font-size: 0.9rem;
  letter-spacing: 0.48rem;
`;

export const LogoTextSmall = styled(LogoText)`
  font-size: 0.7rem;
  letter-spacing: 0.3rem;
`;
