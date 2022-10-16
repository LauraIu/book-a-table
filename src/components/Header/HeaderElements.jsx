import styled from "styled-components";
import ImgBg from "../../IMG/header.jpeg";

export const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100vh;

  box-shadow: 1px 10px 25px 1px #4a281a, -1px -5px 15px 5px #fafafa;

  background: url(${ImgBg});
  background-position: center;
  background-size: cover;
  /* background-color:#000; */
`;

export const Title = styled.h1`
  margin-top: auto;
  /* margin-bottom:0; */
  font-size: clamp(3rem, 15vw, 5.5rem);
  font-family: "Merriweather Sans", sans-serif;
  font-weight: 800;
  line-height: 90%;
  letter-spacing: -0.2rem;
  color: #f10707;
`;

export const Subtitle = styled.h3`
  font-size: clamp(0.5rem, 7.5vw, 3rem);
  font-weight: 400;
  letter-spacing: 0.5rem;
  color: #fab623;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  margin-bottom: 2.5rem;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.5rem;
  color: #fab623;
`;

// linear-gradient(to bottom, rgba(14, 1, 26, 0.335), rgba(219, 179, 92, 0.164)),
