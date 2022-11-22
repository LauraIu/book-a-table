import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
// import { Link as LinkRouter } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #170f0b;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;

  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  /* top: 0; */
`;

export const CloseIcon = styled(FaTimes)`
  color: #fab623;
  
  &:hover {
    color: red;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  padding-top:24px;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #e5b507;
  cursor: pointer;

  &.active {
    font-weight: 700;
    color: #f0e3d2;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: #f0e3d2;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarButton = styled(Link)`
  white-space: nowrap;
  padding: 10px 20px;
  color: #170f0b;
  font-size: 16px;
  font-weight: 700;
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
`;

