import styled from "styled-components";
import TableImg from "../../IMG/MammaMia_interior.jpeg";

export const BookingContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background: url(${TableImg});
  background-position: bottom;
  background-size: cover;
  background-color: #000;

  padding: 8rem 2rem 8rem 2rem;
  margin: 0rem auto;
  border-bottom: 1px solid #f0e3d2;
`;

export const SubmitButton = styled.button`
  font-weight: 800;
  font-size: clamp(1.2rem, 2.5vw, 1rem);
  letter-spacing: 0.5px;
  color: #170f0b;
  background: #fab623;
  border: 1px solid #f0e3d2;
  border-radius: 2px;
  padding: 0.75rem 1.5rem;
  margin: 1rem auto;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #f0e3d2;
    background:#170f0b;
    border: 1px solid #fab623;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
`;

export const BookingForm = styled.div`
width: 300px;
`;
export const Form = styled.div`
  font-weight: 700;
  text-align: center;

  font-size: 1.5rem;
  padding: 2rem 3.5rem;
  margin-bottom: 1rem;
  border: 1px solid #f0e3d2;

  /* background: #170f0bb4; */
  background: #0a0904ab;
  
  /* box-shadow: 1px 10px 15px 1px #333, -1px -5px 15px 5px #fab623; */
  /* border:1px solid #fab623; */
  border-radius: 2px;
`;

export const IntroBigTitle = styled.h1`
  font-weight: 800;
  font-size: clamp(2.2rem, 2.5vw, 2rem);
  color: #fab623;
  line-height: 150%;

  margin-bottom: 2rem;
  border-bottom: 3px solid #f0e3d2;
`;

export const Label = styled.p`
  text-align: center;
  font-size: 1.2rem;
  padding: 1rem 0rem;
  margin-top: 0.3rem;

  color: #f0e3d2;
  /* border:3px solid red; */
`;

export const Input = styled.input`
  /* font-style: bold; */
  padding: 0.3rem 0.5rem;
  width: 99%;
  color:#170f0b;
  background-color: #f0e3d2;
  border: 1px solid #170f0b;
  border-radius: 2px;

  outline: none;

  &:focus {
    border: 1px solid #fab623;
  }
  &:hover {
    background: #fab623;
    border: 1px solid #f0e3d2;
  }
`;

//Reservation data
export const ReservationInfo = styled.div`
  font-weight: 700;
  text-align: center;
  font-size: 1.5rem;
  padding: 2rem 3.5rem;
  margin-bottom: 1rem;
  color: #f0e3d2;
  background: #0a0904cc;

  border-radius: 2px;
  border: 1px solid #f0e3d2;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const BookedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BookedInputName = styled.p`
  font-size: 1.2rem;
  margin: 0;
  color: #f0e3d2;
  /* border:3px solid red; */
`;

export const BookedData = styled.span`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #fab623;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  font-weight: 800;
  font-size: clamp(1.2rem, 2.5vw, 1rem);
  letter-spacing: 0.5px;
  color:#170f0b;
  background: #fab623;
  border: 1px solid #f0e3d2;
  border-radius: 2px;
  padding: 0.75rem 1.5rem;
  margin: 2rem auto 0 auto;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #f0e3d2;
    background:#170f0b;
    border: 1px solid #fab623;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
`;

export const Text = styled.p`
max-width: 250px;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 0rem;
  margin-top: 0.3rem;

  color: #f0e3d2;
  /* border:3px solid red; */
`;