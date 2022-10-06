import styled from "styled-components"
import TableImg from "../../IMG/MammaMia_interior.jpeg";

export const BookingContainer = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height:400px;
    background:url(${TableImg});
    background-position: bottom;
    background-size:cover;
    background-color:#000;

    padding:8rem 2rem 8rem 2rem;
    margin: 0rem auto; 
    border-bottom:2px solid #fab623;
`
export const Button = styled.button`
    font-weight:800;
    font-size:clamp(1.2rem, 2.5vw, 1rem);
    color:#000;
    background:#fab623;
    border:1px solid #f0e3d2;
    border-radius: 2px;
    padding: 0.75rem 1.5rem;
    margin:1rem 1rem ;

    cursor: pointer;
`
export const BookingForm = styled.div`
    /* display: flex; */
`
export const Form = styled.div`
    font-weight:700;
    text-align: center;
    
    font-size:1.5rem;
    padding: 2rem 3.5rem;
    margin-bottom: 1rem;
    border:1px solid #f0e3d2;
    
    background: #0a0904ab;

    /* box-shadow: 1px 10px 15px 1px #333, -1px -5px 15px 5px #fab623; */
    /* border:1px solid #fab623; */
    border-radius: 2px;
`

export const IntroBigTitle = styled.h1`
    font-weight:800;
    font-size:clamp(2.2rem, 2.5vw, 2rem);
    color:#fab623;
    line-height:150%;
    
    margin-bottom:2rem;
    border-bottom:3px solid #f0e3d2;
`

export const Label = styled.p`
    text-align: center;
    font-size:1.2rem;
    padding: 1rem 0rem;
    margin-top: 0.3rem;

    color:#f0e3d2;
    /* border:3px solid red; */
`

export const Input = styled.input`
    font-style: italic;
    padding: 0.3rem 0.5rem;
    width:99%;
    background-color: #f0e3d2;
    border:1px solid #000;
    border-radius: 2px;
`
