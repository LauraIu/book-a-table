import styled from "styled-components";

export const MenuContainer = styled.section`
  height: auto;
  border-top:1px solid #f8f7f0;
  border-bottom:1px solid #fab623;
  /* background-color: #ded0bc; */
  /* background-color: #f3ebe2; */
  background-color: #efeae4;
  box-shadow: 1px 10px 25px 1px #451300, -1px -5px 15px 5px #fafafa;

  padding: 5rem;
`;

export const MenuHeading = styled.h1`
  text-align: center;
  font-weight: 800;
  font-size: clamp(2.2rem, 2.5vw, 3rem);
  color: red;

  padding: 3rem 2rem 0rem 2rem;
`;

export const MenuSubtitle = styled.p`
  text-align: center;
  margin-bottom: 6rem;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.25rem;
  color: #170f0b;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto 3rem auto;

  max-width: 1200px;
  

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const MenuCard = styled.div`
  margin: 0 2rem;
  line-height: 1.5;
  width: 300px;
  padding-bottom: 1rem;
  margin: 4rem 3rem;

  background-color: #ffffff;
  box-shadow: rgba(52, 47, 39, 0.3) 0px 5px 10px,
    rgba(52, 47, 39, 0.3) 0px 3px 5px;
    border-radius: 2px;
`;

export const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 4rem 2rem 2rem 2rem;
  margin: -3rem 0rem 0rem;

  color: #fab623;
  border-top: 6px double #fab623;
  background: #170f0b;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:focus {
    border: 1px solid #fab623;
  }
  &:hover {
    color: #170f0b;
    border-top: 6px double #170f0b;
    background-color: #fab623;
  }
`;

export const MenuImg = styled.img`
align-items: center
  height: 290px;
  min-width: 290px;
  max-width: 100%;
  /* box-shadow: 1px 10px 15px 1px #333, -1px -5px 15px 5px #fab623; */
  /* box-shadow: 1px 10px 15px 1px #4c351f, -1px -5px 15px 5px #836931; */
  padding: 0.5rem ;
  border-radius: 150px;

  transition: transform 0.8s ease-in-out;

  &:hover {
    /* box-shadow: 1px 10px 15px 1px #da9407, -1px -5px 15px 5px #333; */
    transform: rotate(360deg);
  }
`;

export const MenuTitle = styled.h2`
  font-weight: 800;
  font-size: 1.8rem;
  letter-spacing: 0.5px;
  padding-bottom: 1rem;
`;

export const MenuDescription = styled.p`
  margin-bottom: 1rem;
`;

export const MenuPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: red;
`;
