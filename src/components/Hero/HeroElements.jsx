import styled from "styled-components";
import ImgBg from "../../IMG/pizza_heroBg_96dpi_1920.jpeg";

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #c7a171;

  background-image: radial-gradient(
      circle,
      rgba(244, 241, 236, 0),
      rgba(46, 25, 10, 0.211),
      rgba(16, 8, 2, 0.509)
    ),
    url(${ImgBg});
  background-position: center center;
  background-size: cover;

  background-repeat: no-repeat;
  margin: 0 auto;
  width: auto;
  height: 100vh;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 30vw;

  margin-top: 42px;
  padding: 0px 24px;
  min-height: 60vh;

  border: 1px solid #f0e3d2;
  border-radius: 4px;
  background-color: #170f0bdc;

  @media screen and (max-width: 768px) {
    max-width: 320px;
    margin: 0 8px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 360px;
  }

  @media screen and (min-width: 1500px) {
    margin-top: 50px;
    padding: 0px 64px; 
  }
`;

export const Title = styled.h1`
  font-size: clamp(1rem, 10vw, 3rem);
  font-family: "Merriweather Sans", sans-serif;
  font-weight: 800;
  line-height: 120%;
  letter-spacing: -0.2rem;
  padding-top: 24px;
  color: #fab623;

  @media screen and (max-width: 768px) {
    font-size: clamp(1rem, 10vw, 2.5rem);
    padding-top: 16px;
  }

  @media screen and (min-width: 1500px) {
    font-size: 3rem;
   
  }
`;

export const Subtitle = styled.h3`
  font-size: clamp(0.5rem, 7.5vw, 1.5rem);
  font-weight: 400;
  letter-spacing: 0.1rem;
  line-height: 1.5;
  color: #f0e3d2;
  margin-top: 1rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media screen and (min-width: 1500px) {
    font-size: 1.9rem;
    line-height: 1.3;
    margin-bottom: 3.5rem;
    
  }
`;

export const Text = styled.small`
  margin: 0 48px 48px 48px;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  color: #fab623;

  @media screen and (max-width: 330px) {
    margin: 0 0px 24px 0px;
  }
  @media screen and (max-width: 768px) {
    margin: 0 48px 24px 48px;
  }

  @media screen and (min-width: 1500px) {
    font-size: 1.5rem;
    line-height: 1.2;
    letter-spacing: 0.1rem;
    
  }
`;

