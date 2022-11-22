import styled from "styled-components";
// import { Link as LinkRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;

  height: 100px;
  margin-top: -100px;
  top: 0;
  z-index: 10;

  background: #170f0b;
  border-bottom: 1px solid #fab623;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 100px;
  width: 100%;
  max-width: 1050px;
  padding: 0 24px;
  z-index: 1;
`;

export const NavLogo = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: red;
  cursor: pointer;

  text-decoration: none;
  font-size: 3rem;
  font-weight: 800;
  padding-top: 1.5rem;

  /* &.active{
    text-decoration: none;
    color: red;
  } */
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

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;

    color: #f0e3d2;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fab623;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 40px;
  /* border: 1px solid red; */
`;

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  margin: auto 2rem;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  text-decoration: none;
  text-transform: uppercase;
  color: #f0e3d2;
  cursor: pointer;

  &.active {
    font-weight: 700;
    color: #fab623;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: #fab623;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }

  @media screen and (max-width: 900px) {
    font-size: 1.5rem; 
    margin: auto 0;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  white-space: nowrap;
  padding: 10px 20px;
  color: #170f0b;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  background: #fab623;
  border: 1px solid #f0e3d2;
  border-radius: 2px;
  margin: 1rem auto;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    background: #170f0b;
    color: #f0e3d2;
    border: 1px solid #fab623;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }

  @media screen and ( max-width: 900px) {
    font-size: 1.5rem;
    padding: 5px 10px;
    margin: auto 0;
  }
`;
