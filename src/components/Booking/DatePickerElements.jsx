import styled from "styled-components";

export const DateInputButton = styled.button`
  font-weight: 800;
  font-size: 1.2rem;
  color: #231913;
  background: #f0e3d2;
  border: 1px solid #000;
  border-radius: 2px;
  /* padding: 0.75rem 1.5rem; */
  /* margin: 1rem 1rem; */

  padding: 0.3rem 0.5rem 0.5rem 0.5rem;
  margin-bottom: 1.5rem;
  width: 99%;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:focus {
    border: 1px solid #fab623;
  }

  &:hover {
    background: #fab623;
    border: 1px solid #f0e3d2;
  }
`;

export const CalendarLabel = styled.p`
  text-align: center;
  font-size: 1.2rem;
  padding-top: 1rem;
  margin-bottom: 0.1rem;

  color: #f0e3d2;
  /* border:3px solid red; */
`;
